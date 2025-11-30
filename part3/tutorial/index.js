const express = require('express');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT;
const Note = require('./models/note');

const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  if (error.name === 'CastError') {
    return response.status(400).send({ message: "Malformed id "});
  };

  next(error);
};

app.use(express.json());
app.use(express.static('dist'));


app.get('/api/notes', (request, response) => {
  Note.find({}).then(result => {
    response.json(result);
  });
});

app.get('/api/notes/:id', (request, response, next) => {
  Note.findById(request.params.id)
    .then(note => {
      if (note) {
        response.json(note);
      } else {
        response.status(404).end();
      }
    })
    .catch(error => next(error))
});

app.delete('/api/notes/:id', (request, response) => {
  Note.findByIdAndDelete(request.params.id)
    .then(result => response.json(result))
    .catch(error => next(error))
});

app.put('/api/notes/:id', (request, response) => {
  const id = request.params.id;
  const { content, important } = request.body;

  Note.findById(id).then(note => {
    if (!note) {
      return response.status(404).end();
    };

    note.content = content;
    note.important = important;

    return note.save().then((newNote) => {
      response.json(newNote);
    })
    .catch(error => next(error));
  })
});

app.post('/api/notes', (request, response) => {
  if (!request.body.content) {
    return response.status(400).json({
      error: "content property missing"
    })
  };

  const newNote = new Note ({
    content: request.body.content,
    important: request.body.important || false
  });

  newNote.save().then(result => response.json(result))
});

app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});
