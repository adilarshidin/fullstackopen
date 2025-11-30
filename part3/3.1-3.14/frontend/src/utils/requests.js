const getPersonsRequest = async () => {
  return await fetch("/api/persons")
    .then(response => response.json())
};

const addPersonRequest = async (name, number) => {
  const body = { name: name, number: number };

  return await fetch("/api/persons", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  })
    .then(async response => {
      const data = await response.json();
      return !!data.result;
    })
    .catch(error => false)
};

const deletePersonRequest = async(id) => {
  return await fetch(`/api/persons/${id}`, {
    method: "DELETE"
  })
    .then(response => response.json())
    .catch(error => false)
};

const updatePersonRequest = async(person) => {
  const payload = { name: person.name, number: person.number };
  console.log(payload)
  return await fetch(`/api/persons/${person.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
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
