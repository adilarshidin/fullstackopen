const filterReducer = (state = '', action) => {
  switch (action.type) {
  case 'SWITCH_FILTER':
    return action.payload.filterValue;
  default:
    return state;
  }
};

const filterActionCreator = (filterValue) => {
  return {
    type: 'SWITCH_FILTER',
    payload: {
      filterValue: filterValue
    }
  };
};

export { filterReducer, filterActionCreator };
