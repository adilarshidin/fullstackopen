const express = require('express');
const mongoose = require('mongoose');
const config = require('./utils/config');
const blogsRouter = require('./controllers/blogs');

const app = express();


mongoose.connect(config.MONGO_DB_URI, { family: 4 })
  .then(console.log('Connected to Mongo DB.'))
  .catch(console.error('Error connecting to Mongo DB.'));

app.use(express.json());
app.use('/api/blogs', blogsRouter);

module.exports = app;
