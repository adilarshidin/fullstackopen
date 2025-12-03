const getNotesRequest = async () => {
  return await fetch("/api/notes")
    .then(response => response.json())
};

const updateNoteRequest = async (note) => {
  const body = { content: note.content, important: note.important };
  return await fetch(`/api/notes/${note._id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  })
    .then(response => response.json())
};

const addNoteRequest = async (content) => {
  return await fetch("/api/notes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content: content })
  })
    .then(response => response.json())
};

const deleteNoteRequest = async (id) => {
  return await fetch(`/api/notes/${id}`, {
    method: "DELETE"
  })
    .then(response => response.json())
};

export { 
  getNotesRequest,
  updateNoteRequest,
  deleteNoteRequest,
  addNoteRequest
};
