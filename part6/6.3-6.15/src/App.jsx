import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';
import Filter from './components/Filter';
import Notification from './components/Notification';

import {
  setAnecdotes,
  createAnecdoteActionCreator,
  upvoteAnecdoteActionCreator,
} from './reducers/anecdoteReducer';
import { switchFilter } from './reducers/filterReducer';
import {
  changeNotificationActionCreator,
  resetNotificationActionCreator
} from './reducers/notificationReducer';
import { getAnecdotesRequest, postAnecdoteRequest } from './utils/requests';


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getAnecdotes = async () => {
      const fetchedAnecdotes = await getAnecdotesRequest();

      if (!fetchedAnecdotes.result) {
        dispatch(changeNotificationActionCreator({ type: 'error', content: fetchedAnecdotes.message }));
        return null;
      };

      dispatch(setAnecdotes(fetchedAnecdotes));
    };
    getAnecdotes();
  }, [dispatch]);

  const anecdotes = useSelector(({ anecdotes, filter }) => {
    if (!filter) {
      return anecdotes;
    }
    return anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter));
  });
  const sortedAnecdotes = [...anecdotes].sort(
    (firstAnecdote, secondAnecdote) => secondAnecdote.votes - firstAnecdote.votes);
  const notification = useSelector(({ notification }) => notification);

  const upvoteHandler = (id) => {
    dispatch(upvoteAnecdoteActionCreator(id));
    dispatch(changeNotificationActionCreator({ type: 'upvote', content: id }));
    setTimeout(() => dispatch(resetNotificationActionCreator()), 5000);
  };
  const addAnecdoteHandler = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = '';
    const newAnecdote = await postAnecdoteRequest({ content: content, votes: 0 });

    if (!newAnecdote.result) {
      dispatch(changeNotificationActionCreator({ type: 'error', content: newAnecdote.message }));
      return null;
    };

    dispatch(createAnecdoteActionCreator(newAnecdote));
    dispatch(changeNotificationActionCreator({ type: 'create', content: content }));
    setTimeout(() => dispatch(resetNotificationActionCreator()), 5000);
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
