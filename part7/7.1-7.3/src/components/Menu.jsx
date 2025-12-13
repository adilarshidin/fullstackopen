import {
  Route, Link, Routes
} from 'react-router-dom';

import AnecdoteList from './AnecdoteList';
import About from './About';
import CreateNew from './CreateNew';
import Anecdote from './Anecdote';


const Menu = ({ anecdotes, matchedAnecdote, addNew }) => {
  const padding = {
    paddingRight: 5
  };

  return (
    <div>
      <Link style={padding} to="/anecdotes">anecdotes</Link>
      <Link style={padding} to="/create-new">create new</Link>
      <Link style={padding} to="/about">about</Link>

      <Routes>
        <Route path='/anecdotes/:id' element={<Anecdote anecdote={matchedAnecdote} />} />
        <Route path='/anecdotes' element={<AnecdoteList anecdotes={anecdotes} />} />
        <Route path='/create-new' element={<CreateNew addNew={addNew} />} />
        <Route path='/about' element={<About />} />
        <Route path='/' element={<div></div>} />
      </Routes>
    </div>
  );
};

export default Menu;
