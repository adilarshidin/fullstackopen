const Filter = ({ filterChangeHandler }) => {
  return (
    <div>
      Filter<input name="filter" onChange={filterChangeHandler} />
    </div>
  );
};

export default Filter;
