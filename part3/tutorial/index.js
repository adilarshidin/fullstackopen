const express = require('express');
require('dotenv').config()


const app = express();
const PORT = process.env.PORT;
const Note = require('./models/note');

let notes = [
  {
    id: "1",
    content: "HTML is easy",
    important: true
  },
  {
    id: "2",
    content: "Browser can execute only JavaScript",
    important: false
  },
  {
    id: "3",
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true
  }
];

app.use(express.json());
//app.use(express.static('dist'));

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
});

app.get('/api/notes', (request, response) => {
  Note.find({}).then(result => {
    response.json(result);
  });
});

app.get('/api/notes/:id', (request, response) => {
  const id = request.params.id;
  const note = notes.find(note => note.id === id);

  if (note) {
    response.json(note);
  } else {
    response.statusMessage = "No note with such id is found";
    response.status(404).end();
  }
});

app.delete('/api/notes/:id', (request, response) => {
  const id = request.params.id;
  const note = notes.find(note => note.id === id);
  if (note) {
    notes.filter(note => note.id === id ? '' : note);
    response.statusMessage = "Note successfully deleted";
    response.status(204).end();
  } else {
    response.statusMessage = "No note with such id is found";
    response.status(404).end();
  };
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
  notes.concat(newNote);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});
