import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import AnecdoteForm from './components/AnecdoteForm';
import Notification from './components/Notification';

import {
  getAnecdotesRequest,
  postAnecdoteRequest,
  putAnecdotesRequest
} from './utils/requests';


const App = () => {
  const queryClient = useQueryClient();

  const newAnecdoteMutation = useMutation({
    mutationFn: postAnecdoteRequest,
    onSuccess: (newAnecdoteResponse) => {
      const anecdotes = queryClient.getQueryData(['anecdotes']);
      const newAnecdotesObject = { result: true, data: anecdotes.data.concat(newAnecdoteResponse.data) };
      queryClient.setQueryData(['anecdotes'], newAnecdotesObject);
    }
  });

  const updateAnecdoteMutation = useMutation({
    mutationFn: putAnecdotesRequest,
    onSuccess: (updatedAnecdote) => {
      const anecdotes = queryClient.getQueryData(['anecdotes']);
      const newAnecdotes = anecdotes.data.map(anecdote =>
        anecdote.id === updatedAnecdote.data.id ? updatedAnecdote.data : anecdote
      );
      const newAnecdotesObject = { result: true, data: newAnecdotes };
      queryClient.setQueryData(['anecdotes'], newAnecdotesObject);
    }
  });

  const getAnecdotesQuery = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAnecdotesRequest,
    refetchOnWindowFocus: false
  });
  if (getAnecdotesQuery.isLoading) return <div>Loading anecdotes...</div>;
  const anecdotesResult = getAnecdotesQuery.data;

  if (!anecdotesResult) {
    return <div>Anecdotes service not available.</div>;
  } else if (!anecdotesResult.result) {
    return <div>{anecdotesResult.message}</div>;
  };
  const anecdotes = anecdotesResult.data;

  const handleNewAnecdote = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = '';
    newAnecdoteMutation.mutate({ content: content, votes: 0 });
  };

  const handleVote = (anecdote) => {
    updateAnecdoteMutation.mutate(
      { content: anecdote.content, id: anecdote.id, votes: anecdote.votes + 1 });
  };

  return (
    <div>
      <h3>Anecdote app</h3>

      <Notification />
      <AnecdoteForm handleNewAnecdote={handleNewAnecdote} />

      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
