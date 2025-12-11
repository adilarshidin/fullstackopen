const filterReducer = (state = 'ALL', action) => {
  switch(action.type) {
  case 'SET_FILTER':
    return action.payload;
  default:
    return state;
  }
};

const filterChange = (value) => {
  return {
    type: 'SET_FILTER',
    payload: value
  };
};

export { filterReducer, filterChange };
