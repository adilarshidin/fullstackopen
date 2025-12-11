import { useDispatch, useSelector } from 'react-redux';

import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';

import {
  createAnecdoteActionCreator,
  upvoteActionCreator
} from './reducers/anecdoteReducer';


const App = () => {
  const dispatch = useDispatch();
  const anecdotes = useSelector(state => state);
  const sortedAnecdotes = [...anecdotes].sort(
    (firstAnecdote, secondAnecdote) => secondAnecdote.votes - firstAnecdote.votes);

  const upvoteHandler = (id) => dispatch(upvoteActionCreator(id));
  const addAnecdoteHandler = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = '';
    dispatch(createAnecdoteActionCreator(content));
  };

  return (
    <div>
      <AnecdoteList sortedAnecdotes={sortedAnecdotes} upvoteHandler={upvoteHandler} />
      <AnecdoteForm addAnecdoteHandler={addAnecdoteHandler} />
    </div>
  );
};

export default App;
