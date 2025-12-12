import { createSlice } from '@reduxjs/toolkit';

import {
  getAnecdotesRequest,
  postAnecdoteRequest,
  putAnecdoteRequest
} from '../utils/requests';


const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    setAnecdotes(state, action) {
      return action.payload.data;
    },
    upvoteAnecdote(state, action) {
      const upvotedAnecdote = state.find(anecdote => anecdote.id === action.payload.data.id);
      const newUpvotedAnecdote = { ...upvotedAnecdote, votes: upvotedAnecdote.votes + 1 };
      const newAnecdotes = state.map(anecdote =>
        anecdote.id === upvotedAnecdote.id ? newUpvotedAnecdote : anecdote);
      return newAnecdotes;
    },
    createAnecdote(state, action) {
      const data = action.payload.data;
      return [...state, { content: data.content, id: data.id, votes: data.votes }];
    }
  }
});

export const { setAnecdotes, createAnecdote, upvoteAnecdote } = anecdoteSlice.actions;

const setAnecdotesActionCreator = () => {
  return async (dispatch) => {
    const anecdotes = await getAnecdotesRequest();
    dispatch(setAnecdotes(anecdotes));
  };
};

const createAnecdoteActionCreator = (anecdote) => {
  return async (dispatch) => {
    const newAnecdote = await postAnecdoteRequest(anecdote);
    dispatch(createAnecdote(newAnecdote));
  };
};

const upvoteAnecdoteActionCreator = (anecdote) => {
  return async (dispatch) => {
    const updatedAnecdote = await putAnecdoteRequest({ ...anecdote, votes: anecdote.votes + 1 });
    dispatch(upvoteAnecdote(updatedAnecdote));
  };
};

export {
  setAnecdotesActionCreator,
  createAnecdoteActionCreator,
  upvoteAnecdoteActionCreator
};
export default anecdoteSlice.reducer;
