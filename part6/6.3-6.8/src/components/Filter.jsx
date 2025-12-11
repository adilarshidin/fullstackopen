const Filter = ({ filterChangeHandler }) => {
  return (
    <div>
      <input name="filter" onChange={filterChangeHandler} />Filter
    </div>
  );
};

export default Filter;
