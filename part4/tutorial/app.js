const config = require('./utils/config');
const logger = require('./utils/logger');
const express = require('express');
const mongoose = require('mongoose');
const middleware = require('./utils/middleware');
const notesRouter = require('./controllers/notes');


mongoose.connect(config.MONGO_DB_URI, { family: 4 })
  .then(() => logger.info(`Connected to Mongo DB via URI: ${config.MONGO_DB_URI}`))
  .catch(error => logger.error(`Failed connecting to Mongo DB via URI: ${config.MONGO_DB_URI}. Error: ${error}`));

const app = express();

app.use(express.json());
app.use('/api/notes', notesRouter);
app.use(middleware.unknownEndpoint);


module.exports = app;
