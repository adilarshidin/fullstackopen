import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import { getNotesRequest, postNoteRequest, putNoteRequest } from './utils/requests';


const App = () => {
  const queryClient = useQueryClient();

  const newNoteMutation = useMutation({
    mutationFn: postNoteRequest,
    onSuccess: (newNote) => {
      const notes = queryClient.getQueryData(['notes']);
      queryClient.setQueryData(['notes'], notes.concat(newNote));
    }
  });

  const updateNoteMutation = useMutation({
    mutationFn: putNoteRequest,
    onSuccess: (updatedNote) => {
      const notes = queryClient.getQueryData(['notes']);
      const notesWithUpdatedNote = notes.map(note => note.id === updatedNote.id ? updatedNote : note);
      queryClient.setQueryData(['notes'], notesWithUpdatedNote);
    }
  });

  const getNotesQuery = useQuery({
    queryKey: ['notes'],
    queryFn: getNotesRequest,
    refetchOnWindowFocus: false
  });
  if (getNotesQuery.isLoading) {
    return <div>loading data...</div>;
  };
  const notes = getNotesQuery.data;

  const addNoteHandler = (event) => {
    event.preventDefault();
    const content = event.target.note.value;
    event.target.note.value = '';
    newNoteMutation.mutate({ content: content, important: false });
  };

  const toggleImportance = (note) => {
    updateNoteMutation.mutate({ ...note, important: !note.important });
  };

  return (
    <div>
      <h2>Notes app</h2>
      <form onSubmit={addNoteHandler}>
        <input name="note" />
        <button type="submit">add</button>
      </form>
      {notes.map((note) => (
        <li key={note.id} onClick={() => toggleImportance(note)}>
          {note.content}
          <strong> {note.important ? 'important' : ''}</strong>
        </li>
      ))}
    </div>
  );
};

export default App;
