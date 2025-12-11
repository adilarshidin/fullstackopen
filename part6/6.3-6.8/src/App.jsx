import { useDispatch, useSelector } from 'react-redux';

import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';
import Filter from './components/Filter';
import Notification from './components/Notification';

import {
  createAnecdoteActionCreator,
  upvoteAnecdoteActionCreator,
} from './reducers/anecdoteReducer';
import { switchFilter } from './reducers/filterReducer';
import {
  changeNotificationActionCreator,
  resetNotificationActionCreator
} from './reducers/notificationReducer';


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
  const notification = useSelector(({ notification }) => notification);

  const upvoteHandler = (id) => {
    dispatch(upvoteAnecdoteActionCreator(id));
    dispatch(changeNotificationActionCreator({ type: 'upvote', content: id }));
    setTimeout(() => dispatch(resetNotificationActionCreator()), 5000);
  };
  const addAnecdoteHandler = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = '';
    dispatch(createAnecdoteActionCreator(content));
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
