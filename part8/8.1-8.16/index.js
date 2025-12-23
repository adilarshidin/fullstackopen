const { ApolloServer } = require("@apollo/server");
const { WebSocketServer } = require('ws')
const { useServer } = require('graphql-ws/use/ws')
const { expressMiddleware } = require('@as-integrations/express5')
const { ApolloServerPluginDrainHttpServer } = require('@apollo/server/plugin/drainHttpServer')
const { makeExecutableSchema } = require("@graphql-tools/schema")
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const { GraphQLError } = require("graphql");
const { PubSub } = require('graphql-subscriptions')
const express = require('express')
const cors = require('cors')
const http = require('http')
require("dotenv").config();

const Author = require("./models/author");
const Book = require("./models/book");
const User = require("./models/user");

const pubsub = new PubSub()

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_DB_URI)
  .then((result) => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB"));

const typeDefs = /* GraphQL */ `
  type User {
    username: String!
    favoriteGenre: String!
    id: ID!
  }

  type Token {
    value: String!
    favoriteGenre: String
  }

  type Author {
    id: ID!
    name: String!
    born: Int
    bookCount: Int!
  }

  type Book {
    title: String!
    published: Int!
    author: Author!
    genres: [String!]!
    id: ID!
  }

  type Query {
    bookCount: Int!
    authorCount: Int!
    allBooks(author: String, genre: String): [Book!]!
    allAuthors: [Author!]!
    me: User
  }

  type Mutation {
    addBook(
      title: String!
      author: String!
      published: Int!
      genres: [String!]!
    ): Book
    editAuthor(name: String!, born: Int!): Author
    createUser(username: String!, favoriteGenre: String!): User
    login(username: String!, password: String!): Token
  }

  type Subscription {
    bookAdded: Book!
  }
`;

const resolvers = {
  Query: {
    bookCount: async () => await Book.collection.countDocuments(),
    authorCount: async () => await Author.collection.countDocuments(),
    allBooks: async (root, args) => {
      if (!args.author && !args.genre) {
        return await Book.find({}).populate("author");
      } else if (args.author && args.genre) {
        return await Book.find({
          author: args.author,
          genres: args.genre,
        }).populate("author");
      } else if (args.author) {
        return await Book.find({ author: args.author }).populate("author");
      } else if (args.genre) {
        return await Book.find({ genres: args.genre }).populate("author");
      }
    },
    allAuthors: async () => await Author.find({}),
    me: (root, args, context) => context.currentUser,
  },
  Author: {
    bookCount: async (parent) => {
      const books = await Book.find({})
      const authorBooks = books.filter((book) => book.author === parent.name);
      return authorBooks.length;
    },
  },
  Mutation: {
    addBook: async (root, args, context) => {
      const currentUser = context.currentUser;
      if (!currentUser) {
        throw new GraphQLError("Unathorized", {
          extensions: {
            code: "Unauthorized",
          },
        });
      }

      let author = await Author.findOne({ name: args.author });
      if (!author) {
        try {
          author = new Author({ name: args.author });
          await author.save();
        } catch (error) {
          throw new GraphQLError("Could not save the new author", {
            extensions: {
              code: "BAD_AUTHOR_INPUT",
              error,
            },
          });
        }
      }

      try {
        const book = new Book({ ...args, author: author._id });
        await book.save();
        const newBook = await Book.findById(book._id).populate("author")
        pubsub.publish("BOOK_ADDED", { bookAdded: newBook })
        return newBook
      } catch (error) {
        throw new GraphQLError("Could not save a new book", {
          extensions: {
            code: "BAD_BOOK_INPUT",
            error,
          },
        });
      }
    },
    editAuthor: async (root, args, context) => {
      const currentUser = context.currentUser;
      if (!currentUser) {
        throw new GraphQLError("Unathorized", {
          extensions: {
            code: "Unauthorized",
          },
        });
      }

      try {
        return await Author.findOneAndUpdate(
          { name: args.name },
          { born: args.born },
          { new: true },
        );
      } catch (error) {
        throw new GraphQLError("Could not edit the author", {
          extensions: {
            code: "BAD_AUTHOR_INPUT",
            invalidArgs: [args.name, args.born],
            error,
          },
        });
      }
    },
    createUser: async (root, args) => {
      try {
        const user = new User({
          username: args.username,
          favoriteGenre: args.favoriteGenre,
        });
        return user.save();
      } catch (error) {
        throw new GraphQLError("Failed saving a new user", {
          extensions: {
            code: "BAD_USER_INPUT",
            invalidArgs: args.username,
            error,
          },
        });
      }
    },
    login: async (root, args) => {
      const user = await User.findOne({ username: args.username });

      if (!user || !args.password || args.password !== "secret") {
        throw new GraphQLError("Invalid credentials", {
          extensions: {
            code: "BAD_USER_INPUT",
            invalidArgs: [args.username, args.password],
          },
        });
      }

      const userForToken = {
        username: user.username,
        id: user.id,
      };
      return {
        value: jwt.sign(userForToken, process.env.JWT_SECRET),
        favoriteGenre: user.favoriteGenre,
      };
    },
  },
  Subscription: {
    bookAdded: {
      subscribe: () => pubsub.asyncIterableIterator("BOOK_ADDED")
    }
  }
};

const start = async () => {
  const app = express()
  const httpServer = http.createServer(app)

  const wsServer = new WebSocketServer({
    server: httpServer,
    path: '/',
  })
  
  const schema = makeExecutableSchema({ typeDefs, resolvers })
  const serverCleanup = useServer({ schema }, wsServer)

  const server = new ApolloServer({
    schema: schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer }),
      {
        async serverWillStart() {
          return {
            async drainServer() {
              await serverCleanup.dispose();
            },
          };
        },
      }
    ],
  })

  await server.start()

  app.use(
    '/',
    cors(),
    express.json(),
    expressMiddleware(server, {
      context: async ({ req }) => {
        const auth = req ? req.headers.authorization : null
        if (auth && auth.startsWith('Bearer ')) {
          const decodedToken = jwt.verify(auth.substring(7), process.env.JWT_SECRET)
          const currentUser = await User.findById(decodedToken.id)
          return { currentUser }
        }
      },
    }),
  )

  const PORT = 4000

  httpServer.listen(PORT, () =>
    console.log(`Server is now running on http://localhost:${PORT}`)
  )
}

start()
