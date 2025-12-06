const jwt = require('jsonwebtoken');

const logger = require('../utils/logger');
const notesRouter = require('express').Router();
const Note = require('../models/note');
const User = require('../models/user');


const getTokenFrom = request => {
  const authorization = request.get('authorization');
  if (authorization && authorization.startsWith('Bearer ')) {
    return authorization.replace('Bearer ', '');
  };
  return null;
};


notesRouter.get('/', async (request, response) => {
  const notesResult = await Note.find({}).populate('user', { username: true, name: true });
  await response.json(notesResult);
});

notesRouter.get('/:id', async (request, response) => {
  const id = request.params.id;

  try {
    const note = await Note.findById(id);

    if (note) {
      response.json(note);
    } else {
      response.status(404).json({
        result: false,
        message: 'Note was not found.'
      });
    };
  } catch (error) {
    if (error.name === 'CastError') {
      response.status(400).end();
    };
  };
});

notesRouter.post('/', async (request, response) => {
  if (!request.body) {
    response.status(400).json({
      result: false,
      message: 'Malformed request body.'
    });
  } else if (!request.body.content) {
    response.status(400).json({
      result: false,
      message: 'Missing note content'
    });
  } else {
    const { content, important } = request.body;
    const decodedToken = jwt.verify(getTokenFrom(request), process.env.SECRET);
    if (!decodedToken.id) {
      return response.status(401).json({ error: 'token invalid' });
    };
    const user = await User.findById(decodedToken.id);

    if (!user) {
      response.json(404).json({
        result: true,
        message: 'User was not found.'
      });
    };

    const newNote = new Note({
      content: content,
      important: important || false,
      user: user._id
    });

    const savedNote = await newNote.save();
    user.notes.push(savedNote._id);
    await user.save();

    logger.info(`Successfully saved a new note: ${savedNote}`);
    response.status(201).json({
      result: true,
      data: savedNote,
      message: 'Successfully saved a new note.'
    });
  };
});

notesRouter.delete('/:id', async (request, response) => {
  const id = request.params.id;

  const deletedNote = await Note.findByIdAndDelete(id);

  if (deletedNote) {
    logger.info(`Successfully deleted a note: ${deletedNote}`);
    response.status(204).json({
      result: true,
      message: 'Note was successfully deleted.'
    });
  } else {
    logger.error(`Error occured while deleting note with id ${id}. Error: ${deletedNote}`);
    response.status(500).json({
      result: false,
      message: 'Error occured while deleting a note.'
    });
  };
});

notesRouter.put('/:id', (request, response) => {
  const id = request.params.id;
  const { content, important } = request.body;
  Note.findById(id).then(note => {
    if (note) {
      note.content = content;
      note.important = important;

      note.save().then(savedNote => {
        logger.info(`Successfully updated a note. Previous: ${note}. Updated: ${savedNote}.`);
        response.json({
          result: true,
          data: savedNote,
          message: 'Note updated successfully.'
        });
      })
        .catch(error => {
          logger.error(`Error occured while updating a note with id ${id}. Error: ${error.message}`);
          response.status(500).json({
            result: false,
            message: 'Error occured while updating a note.'
          });
        });
    } else {
      response.status(404).json({
        result: false,
        message: 'Note was not found.'
      });
    };
  });
});

module.exports = notesRouter;
