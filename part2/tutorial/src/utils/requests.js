const getNotesRequest = async () => {
  return await fetch("http://localhost:3001/notes")
    .then(response => response.json())
};

const addNoteRequest = async (note) => {
  return await fetch("http://localhost:3001/notes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(note)
  })
    .then(response => response.json())
    .catch(error => false)
};

export { getNotesRequest, addNoteRequest };
