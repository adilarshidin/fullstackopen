const baseUrl = 'http://localhost:3001/anecdotes';


const getAnecdotesRequest = async () => {
  const response = await fetch(baseUrl);

  if (!response.ok) {
    return await { result: false, message: 'Failed getting anecdotes.' };
  };

  const responseObject = { result: true, data: await response.json() };

  return await responseObject;
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

  const responseObject = { result: true, data: await response.json() };

  return await responseObject;
};

export { getAnecdotesRequest, postAnecdoteRequest };
