const baseUrl = 'http://localhost:3001/anecdotes';


const getAnecdotesRequest = async () => {
  const response = await fetch(baseUrl);

  if (!response.ok) {
    return await { result: false, message: 'Failed getting anecdotes.' };
  };

  return await { result: true, data: await response.json() };
};

const postAnecdoteRequest = async (anecdote) => {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(anecdote)
  });

  if (!response.ok) {
    return await { result: false, message: 'Failed creating an anecdote.' };
  };

  return await { result: true, data: await response.json() };
};

const putAnecdoteRequest = async (anecdote) => {
  const response = await fetch(`${baseUrl}/${anecdote.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(anecdote)
  });

  if (!response.ok) {
    return await { result: false, message: 'Failed updating the anecdote.' };
  };

  return await { result: true, data: await response.json() };
};

export { getAnecdotesRequest, postAnecdoteRequest, putAnecdoteRequest };
