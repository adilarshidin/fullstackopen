const blogs = [
  {
    _id: "5a422a851b54a676234d17f7",
    title: "React patterns",
    author: "Michael Chan",
    url: "https://reactpatterns.com/",
    likes: 7,
    __v: 0,
  },
  {
    _id: "5a422aa71b54a676234d17f8",
    title: "Go To Statement Considered Harmful",
    author: "Edsger W. Dijkstra",
    url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
    likes: 5,
    __v: 0,
  },
  {
    _id: "5a422b3a1b54a676234d17f9",
    title: "Canonical string reduction",
    author: "Edsger W. Dijkstra",
    url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
    likes: 12,
    __v: 0,
  },
  {
    _id: "5a422b891b54a676234d17fa",
    title: "First class tests",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
    likes: 10,
    __v: 0,
  },
  {
    _id: "5a422ba71b54a676234d17fb",
    title: "TDD harms architecture",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
    likes: 0,
    __v: 0,
  },
  {
    _id: "5a422bc61b54a676234d17fc",
    title: "Type wars",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
    likes: 2,
    __v: 0,
  },
];

const newBlog = {
  title: "Something something",
  author: "Someone",
  url: "http://www.google.com",
  likes: 9000,
};

const newBlogWithoutLikes = {
  title: "Something something",
  author: "Someone",
  url: "http://www.google.com",
};

const newBlogWithoutTitle = {
  author: "Someone",
  url: "http://www.google.com",
  likes: 9000,
};

const newBlogWithoutUrl = {
  title: "Something something",
  author: "Someone",
  likes: 9000,
};

const newUser = {
  username: "paultheapostle",
  name: "Paul",
  password: "777",
};

const newUserInvalidPassword = {
  username: "paultheapostle",
  name: "Paul",
  password: "7",
};

const dummy = () => {
  return 1;
};

const totalLikes = (blogs) => {
  const calculateLikes = (sum, blog) => sum + blog.likes;
  return blogs.reduce(calculateLikes, 0);
};

const favouriteBlog = (blogs) => {
  let maxLikes = 0;
  let blogId = null;

  blogs.forEach((blog) => {
    if (blog.likes > maxLikes) {
      maxLikes = blog.likes;
      blogId = blog._id;
    }
  });

  return blogId;
};

const mostBlogs = (blogs) => {
  let authorsToBlogs = {};

  blogs.forEach((blog) => {
    if (!authorsToBlogs[blog.author]) {
      authorsToBlogs[blog.author] = 0;
    }

    authorsToBlogs[blog.author] += 1;
  });

  let maxBlogs = 0;
  let maxBlogsAuthor = "";

  Object.entries(authorsToBlogs).forEach((entry) => {
    if (entry[1] > maxBlogs) {
      maxBlogs = entry[1];
      maxBlogsAuthor = entry[0];
    }
  });

  return maxBlogsAuthor;
};

const mostLikes = (blogs) => {
  let authorsToLikes = {};

  blogs.forEach((blog) => {
    if (!authorsToLikes[blog.author]) authorsToLikes[blog.author] = 0;
    authorsToLikes[blog.author] += blog.likes;
  });

  let maxLikes = 0;
  let maxLikesAuthor = "";

  Object.entries(authorsToLikes).forEach((entry) => {
    if (entry[1] > maxLikes) {
      maxLikes = entry[1];
      maxLikesAuthor = entry[0];
    }
  });

  return {
    author: maxLikesAuthor,
    likes: maxLikes,
  };
};

module.exports = {
  dummy,
  totalLikes,
  favouriteBlog,
  mostBlogs,
  mostLikes,
  blogs,
  newBlog,
  newBlogWithoutLikes,
  newBlogWithoutTitle,
  newBlogWithoutUrl,
  newUser,
  newUserInvalidPassword,
};
