const express = require('express');
const mongoose = require('mongoose');
const config = require('./utils/config');
const blogsRouter = require('./controllers/blogs');
const usersRouter = require('./controllers/users');
const authRouter = require('./controllers/auth');
const middleware = require('./utils/middlewares');

const app = express();


mongoose.connect(config.MONGO_DB_URI, { family: 4 })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(error => console.error(`Error connecting to Mongo DB: ${error.message}`));

app.use(express.json());
app.use(middleware.tokenExtractor);
app.use(middleware.userExtractor);
app.use('/api/blogs', blogsRouter);
app.use('/api/users', usersRouter);
app.use('/api/auth', authRouter);

module.exports = app;
