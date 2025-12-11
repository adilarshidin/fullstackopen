import { useDispatch, useSelector } from 'react-redux';

import {
  createAnecdoteActionCreator,
  upvoteActionCreator
} from './utils/actionCreators';


const App = () => {
  const dispatch = useDispatch();
  const anecdotes = useSelector(state => state);

  const upvoteHandler = (id) => dispatch(upvoteActionCreator(id));
  const addAnecdoteHandler = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = '';
    dispatch(createAnecdoteActionCreator(content));
  };

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => upvoteHandler(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
      <h2>create new</h2>
      <form onSubmit={addAnecdoteHandler}>
        <div>
          <input name="anecdote" />
        </div>
        <button>create</button>
      </form>
    </div>
  );
};

export default App;
