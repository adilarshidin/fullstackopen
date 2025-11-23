import { useState } from 'react';


const HeaderTwo = ({ text }) => <h2>{text}</h2>;

const Anecdote = ({ anecdotes, selected, type, votes }) => {
  if (type === "current") {
    return (
      <p>{anecdotes[selected]}</p>
    )
  } else if (type === "upvoted") {
    let currentMax = 0;
    let currentMaxIndex = 0;

    for (let i = 0; i < anecdotes.length; i++) {
      if (Math.max(votes[i]) > currentMax) {
        currentMax = votes[i];
        currentMaxIndex = i
      };
    };

    return (
      <p>{anecdotes[currentMaxIndex]}</p>
    )
  };
};

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(() => {
    const votesInitial = {};

    for (let i = 0; i < anecdotes.length; i++) {
      votesInitial[i] = 0;
    };

    return votesInitial;
  });

  const handleClick = () => {
    const newSelected = Math.floor(Math.random() * anecdotes.length);
    setSelected(newSelected);
  };

  const handleUpvote = () => {
    setVotes(votes => ({
      ...votes,
      [selected]: votes[selected] + 1
    }));
  };

  const handleDownvote = () => {
    setVotes(votes => ({
      ...votes,
      [selected]: votes[selected] - 1
    }));
  };

  return (
    <div>
      <HeaderTwo text="Current Anecdote:" />
      <Anecdote anecdotes={anecdotes} selected={selected} type="current" votes={votes} />
      <p>Current anecdote votes: {votes[selected]}</p>
      <Button onClick={handleUpvote} text="Upvote" />
      <Button onClick={handleDownvote} text="Downvote" />
      <Button onClick={handleClick} text="Get next anecdote!" />

      <HeaderTwo text="Most Upvoted Anecdote" />
      <Anecdote anecdotes={anecdotes} selected={selected} type="upvoted" votes={votes} />
    </div>
  )
};

export default App;
