import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';
import Filter from './components/Filter';
import Notification from './components/Notification';

import {
  setAnecdotesActionCreator,
  createAnecdoteActionCreator,
  upvoteAnecdoteActionCreator,
} from './reducers/anecdoteReducer';
import { switchFilter } from './reducers/filterReducer';
import { setNotificationActionCreator } from './reducers/notificationReducer';


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getAnecdotes = async () => {
      dispatch(setAnecdotesActionCreator());
    };
    getAnecdotes();
  }, [dispatch]);

  const anecdotes = useSelector(({ anecdotes, filter }) => {
    if (!filter) {
      return anecdotes;
    };
    return anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter));
  });
  const sortedAnecdotes = [...anecdotes].sort(
    (firstAnecdote, secondAnecdote) => secondAnecdote.votes - firstAnecdote.votes);
  const notification = useSelector(({ notification }) => notification);

  const upvoteHandler = (anecdote) => {
    dispatch(upvoteAnecdoteActionCreator(anecdote));
    dispatch(setNotificationActionCreator({ message: `Upvoted an anecdote: ${anecdote.id}`, timeout: 5000 }));
  };
  const addAnecdoteHandler = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = '';
    dispatch(createAnecdoteActionCreator({ content: content, votes: 0 }));
    dispatch(setNotificationActionCreator({ message: `Created an anecdote: ${content}`, timeout: 5000 }));
  };

  const filterChangeHandler = (event) => {
    const newFilterValue = event.target.value;
    dispatch(switchFilter(newFilterValue));
  };

  return (
    <div>
      <Notification notification={notification} />
      <Filter filterChangeHandler={filterChangeHandler} />
      <AnecdoteList sortedAnecdotes={sortedAnecdotes} upvoteHandler={upvoteHandler} />
      <AnecdoteForm addAnecdoteHandler={addAnecdoteHandler} />
    </div>
  );
};

export default App;
