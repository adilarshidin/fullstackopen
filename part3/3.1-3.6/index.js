const express = require('express');
const app = express();


const unknownRoute = (request, response) => {
  return response.status(404).json({
    message: "Unknown route."
  });
};

const requestLogger = (request, response, next) => {
  console.log(`Method: ${request.method}`);
  console.log(`Path: ${request.path}`);
  console.log(`Body: ${request.body}`);
  next();
};

app.use(express.json());
app.use(requestLogger);
app.set('view engine', 'ejs');
app.set('views', './views');

let persons = [
  { 
    "id": "1",
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  { 
    "id": "2",
    "name": "Ada Lovelace", 
    "number": "39-44-5323523"
  },
  { 
    "id": "3",
    "name": "Dan Abramov", 
    "number": "12-43-234345"
  },
  { 
    "id": "4",
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
  }
];


app.get("/api/persons", (request, response) => {
  return response.json(persons);
});

app.get("/info", (request, response) => {
  return response.render(
    "info",
    {
      amount: persons.length,
      date: Date()
    }
  );
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
      message: "Number or name keys missing in the request body."
    })
  };

  const personExists = persons.find(person =>
    String(person.name).toLowerCase() === String(body.name).toLowerCase()
  );

  if (personExists) {
    return response.status(200).json({
      message: `Person with name ${body.name} already exists.`
    });
  };

  const newId = Math.random().toPrecision(9) * 10000000000
  const newPerson = {
    id: newId,
    name: body.name,
    number: body.number
  };

  persons.concat(newPerson);

  return response.status(201).json({
    "message": `Person with id ${newId} was successfully created.`,
    "data": newPerson
  });
});

app.use(unknownRoute);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
});
