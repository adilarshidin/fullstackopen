const Filter = ({ filters, filteredName, setFilteredName, setFilters }) => {
  const handleFilteredNameInput = (event) => {
    const newFilteredName = event.target.value;
    const newFilters = filters;

    if (!newFilteredName) {
      filters.useFilters = false;    
    } else {
      filters.useFilters = true;
    };

    filters.name = newFilteredName;
    setFilteredName(newFilteredName);
    setFilters(newFilters);
  };

  return (
    <div>
      <p>Find person by name: <input value={filteredName} onChange={handleFilteredNameInput} /></p>
    </div>
  )
};

export default Filter;
