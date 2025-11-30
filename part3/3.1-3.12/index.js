const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Person = require('./models/person');
require('dotenv').config();


const app = express();

morgan.token('body', function getBody(request) {
  return JSON.stringify(request.body);
});

const unknownRoute = (request, response) => {
  return response.status(404).json({
    message: "Unknown route."
  });
};

app.use(express.json());
app.use(morgan(':method :url :status, \
content-length: :res[content-length], :response-time seconds, body: :body'));
app.use(express.static('dist'));
app.set('view engine', 'ejs');
app.set('views', './views');


app.get("/api/persons", (request, response) => {
  let persons = [];
  Person.find({}).then(result => {
    result.forEach(person => {
      persons.push(person);
    });
    response.json(persons);
  });
});

app.get("/info", (request, response) => {
  let persons = [];
  Person.find({}).then(result => {
    result.forEach(person => {
      persons.push(person);

      return response.render(
        "info",
        {
          amount: persons.length,
          date: Date()
        }
      );
    });
  });
});

app.get("/api/persons/:id", (request, response) => {
  const personId = request.params.id;
  const person = persons.find(person => person.id === personId);

  if (!person) {
    return response.status(404).json({
      message: `Person with id ${personId} was not found.`
    })
  };

  return response.json(person);
});

app.delete("/api/persons/:id", (request, response) => {
  const personId = request.params.id;
  const person = persons.find(person => person.id === personId);

  if (!person) {
    return response.status(404).json({
      message: `Person with id ${personId} was not found.`
    })
  };

  persons.filter(person => person.id === personId ? '' : person);
  return response.status(200).json({
    message: `Person with id ${personId} was successfully deleted.`
  });
});

app.post("/api/persons", (request, response) => {
  const body = request.body;
  if (!body || !body.name || !body.number) {
    return response.status(400).json({
      result: false,
      message: "Number or name keys missing in the request body."
    })
  };

  const newPerson = new Person({
    name: body.name,
    number: body.number
  });

  newPerson.save().then(result => {
    console.log(`${newPerson} saved to DB.`);
    const returnData = {
      result: true,
      data: result
    };

    return response.json(returnData);
  });
});

app.use(unknownRoute);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
});
