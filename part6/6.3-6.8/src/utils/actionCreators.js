const getId = () => Number((100000 * Math.random())).toFixed(0);


const upvoteActionCreator = (id) => {
  return {
    type: 'UPVOTE',
    payload: {
      id: id
    }
  };
};

const createAnecdoteActionCreator = (content) => {
  return {
    type: 'CREATE',
    payload: {
      content: content,
      id: String(getId),
      votes: 0
    }
  };
};

export { getId, upvoteActionCreator, createAnecdoteActionCreator };
