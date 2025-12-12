import { createSlice } from '@reduxjs/toolkit';


const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    setAnecdotes(state, action) {
      return action.payload.data;
    },
    upvoteAnecdoteActionCreator(state, action) {
      const upvotedAnecdote = state.find(anecdote => anecdote.id === action.payload);
      const newUpvotedAnecdote = { ...upvotedAnecdote, votes: upvotedAnecdote.votes + 1 };
      const newAnecdotes = state.map(anecdote =>
        anecdote.id === upvotedAnecdote.id ? newUpvotedAnecdote : anecdote);
      return newAnecdotes;
    },
    createAnecdoteActionCreator(state, action) {
      const data = action.payload.data;
      return [...state, { content: data.content, id: data.id, votes: data.votes }];
    }
  }
});

export const {
  setAnecdotes, upvoteAnecdoteActionCreator, createAnecdoteActionCreator
} = anecdoteSlice.actions;
export default anecdoteSlice.reducer;
