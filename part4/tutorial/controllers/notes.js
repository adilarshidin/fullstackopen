const logger = require('../utils/logger');
const notesRouter = require('express').Router();
const Note = require('../models/note');
if (Note) {
  logger.info('Note model imported.');
};


notesRouter.get('/', (request, response) => {
  Note.find({}).then(notes => {
    response.json(notes);
  })
    .catch(error => logger.error(`Error occured while fetching notes: ${error}`));
});

notesRouter.get('/:id', (request, response) => {
  const id = request.params.id;

  Note.findById(id).then(note => {
    if (note) {
      response.json(note);
    } else {
      response.status(404).json({
        result: false,
        message: 'Note was not found.'
      });
    };
  })
    .catch(error => {
      logger.error(`Error occured while fetching note with id ${id}. Error: ${error.message}`);
      response.status(500).json({
        result: false,
        message: 'Error occured while fetching the note.'
      });
    });
});

notesRouter.post('/', (request, response) => {
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
    const newNote = new Note({
      content: content,
      important: important || false
    });

    newNote.save().then(savedNote => {
      logger.info(`Successfully saved a new note: ${savedNote}`);
      response.status(201).json({
        result: true,
        message: 'Successfully saved a new note.'
      });
    })
      .catch(error => {
        logger.error(`Error occured while adding note: ${newNote}. Error: ${error.message}`);
        response.status(500).json({
          result: false,
          message: 'Error occured while adding a new note.'
        });
      });
  };
});

notesRouter.delete('/:id', (request, response) => {
  const id = request.params.id;

  Note.findByIdAndDelete(id).then(deletedNote => {
    logger.info(`Successfully deleted a note: ${deletedNote}`);
    response.json({
      result: true,
      message: 'Note was successfully deleted.'
    });
  })
    .catch(error => {
      logger.error(`Error occured while deleting note with id ${id}. Error: ${error.message}`);
      response.status(500).json({
        result: false,
        message: 'Error occured while deleting a note.'
      });
    });
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
