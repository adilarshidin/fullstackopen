import { useState } from 'react';
import { useMatch } from 'react-router-dom';
import { Container } from '@mui/material';

import Menu from './components/Menu';
import Footer from './components/Footer';
import Notification from './components/Notification';
import ViewsRoutes from './components/Routes';


const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: 1
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: 2
    }
  ]);
  const anecdoteMatch = useMatch('/anecdotes/:id');
  const matchedAnecdote = anecdoteMatch
    ? anecdotes.find(anecdote => anecdote.id === Number(anecdoteMatch.params.id))
    : null;

  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000);
    setAnecdotes(anecdotes.concat(anecdote));
  };

  const anecdoteById = (id) =>
    anecdotes.find(a => a.id === id);

  const vote = (id) => {
    const anecdote = anecdoteById(id);

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    };

    setAnecdotes(anecdotes.map(a => a.id === id ? voted : a));
  };

  return (
    <Container >
      <Notification />
      <h1>Software anecdotes</h1>
      <Menu />
      <ViewsRoutes anecdotes={anecdotes} matchedAnecdote={matchedAnecdote} addNew={addNew} />
      <Footer />
    </Container>
  );
};

export default App;
