import { useDispatch, useSelector } from 'react-redux';

import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';
import Filter from './components/Filter';

import {
  createAnecdoteActionCreator,
  upvoteActionCreator,
} from './reducers/anecdoteReducer';
import { filterActionCreator } from './reducers/filterReducer';


const App = () => {
  const dispatch = useDispatch();
  const anecdotes = useSelector(({ anecdotes, filter }) => {
    if (!filter) {
      return anecdotes;
    }
    return anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter));
  });
  const sortedAnecdotes = [...anecdotes].sort(
    (firstAnecdote, secondAnecdote) => secondAnecdote.votes - firstAnecdote.votes);

  const upvoteHandler = (id) => dispatch(upvoteActionCreator(id));
  const addAnecdoteHandler = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = '';
    dispatch(createAnecdoteActionCreator(content));
  };

  const filterChangeHandler = (event) => {
    const newFilterValue = event.target.value;
    dispatch(filterActionCreator(newFilterValue));
  };

  return (
    <div>
      <Filter filterChangeHandler={filterChangeHandler} />
      <AnecdoteList sortedAnecdotes={sortedAnecdotes} upvoteHandler={upvoteHandler} />
      <AnecdoteForm addAnecdoteHandler={addAnecdoteHandler} />
    </div>
  );
};

export default App;
