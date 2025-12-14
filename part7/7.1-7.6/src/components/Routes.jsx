import { Routes, Route } from 'react-router-dom';

import AnecdoteList from './AnecdoteList';
import About from './About';
import CreateNew from './CreateNew';
import Anecdote from './Anecdote';


const ViewsRoutes = ({ anecdotes, matchedAnecdote, addNew }) => (
  <Routes>
    <Route path='/anecdotes/:id' element={<Anecdote anecdote={matchedAnecdote} />} />
    <Route path='/anecdotes' element={<AnecdoteList anecdotes={anecdotes} />} />
    <Route path='/create-new' element={<CreateNew addNew={addNew} />} />
    <Route path='/about' element={<About />} />
    <Route path='/' element={<div></div>} />
  </Routes>
);

export default ViewsRoutes;
