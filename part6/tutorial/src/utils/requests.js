const baseUrl = 'http://localhost:3001/notes';


const getNotesRequest = async () => {
  const response = await fetch(baseUrl);

  if (!response.ok) {
    throw new Error('Failed to fetch notes');
  };

  return await response.json();
};

const addNoteRequest = async (note) => {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(note)
  });

  if (!response.ok) {
    throw new Error('Failed to add a new note.');
  }

  return await response.json();
};

const changeNoteImportanceRequest = async (note) => {
  const response = await fetch(`${baseUrl}/${note.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(note)
  });

  if (!response.ok) {
    throw new Error('Failed to change note\'s importance.');
  };

  return await response.json();
};

export { getNotesRequest, addNoteRequest, changeNoteImportanceRequest };
