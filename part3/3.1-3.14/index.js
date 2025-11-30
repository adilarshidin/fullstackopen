const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Person = require('./models/person');
require('dotenv').config();
const PORT = process.env.PORT || 3001;


const app = express();

morgan.token('body', function getBody(request) {
  return JSON.stringify(request.body);
});

const unknownRoute = (request, response) => {
  return response.status(404).json({
    message: "Unknown route."
  });
};

const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  if (error.name === "CastError" || error.name === "ObjectParameterError") {
    response.status(400).json({ result: false, message: "Malformed id" })
  };

  next(error);
};

app.use(express.json());
app.use(morgan(':method :url :status, \
content-length: :res[content-length], :response-time seconds, body: :body'));
app.use(express.static('dist'));
app.set('view engine', 'ejs');
app.set('views', './views');


app.get("/api/persons", (request, response, next) => {
  let persons = [];
  Person.find({}).then(result => {
    result.forEach(person => {
      persons.push(person);
    });
    response.json(persons);
  })
  .catch(error => next(error))
});

app.get("/info", (request, response, next) => {
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
  })
  .catch(error => next(error))
});

app.get("/api/persons/:id", (request, response, next) => {
  Person.findById(request.params.id).then(person => {
    if (!person) {
      return response.status(404).json({
        result: false,
        message: `Person with id ${request.params.id} was not found.`
      })
    };

    return response.json(person);
  })
  .catch(error => next(error))
});

app.delete("/api/persons/:id", (request, response) => {
  Person.findByIdAndDelete(request.params.id)
    .then(result => response.json(result))
    .catch(error => next(error))
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

app.put("/api/persons/:id", (request, response, next) => {
  if (!request.body || !request.body.name || !request.body.number) {
    return response.status(400).json({
      result: false,
      message: "Number or name keys missing in the request body."
    })
  };

  const id = request.params.id;
  Person.findById(id).then(person => {
    if (!person) {
      response.status(404).json({
        result: false,
        message: `Person with id ${id} was not found.`
      })
    };
    person.number = request.body.number;

    person.save().then((newPerson) => response.json(newPerson));
  })
  .catch(error => next(error))
});

app.use(unknownRoute);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
});
