const getPersonsRequest = async () => {
  return await fetch("http://localhost/persons")
    .then(response => response.json())
};

const addPersonRequest = async (personToAdd) => {
  return await fetch("http://localhost:3001/persons", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(personToAdd)
    })
    .then(response => response.json())
    .catch(error => false)
};

const deletePersonRequest = async (id) => {
  return await fetch(`http://localhost:3001/persons/${id}`, {
    method: "DELETE",
  })
  .then(response => response.json())
  .catch(error => false)
};

const updatePersonRequest = async (id, person) => {
  return await fetch(`http://localhost:3001/persons/${id}`, {
    method: "PUT",
    body: JSON.stringify(person)
  })
  .then(response => response.json())
  .catch(error => false)
};

export { 
  getPersonsRequest,
  addPersonRequest,
  deletePersonRequest,
  updatePersonRequest
};
