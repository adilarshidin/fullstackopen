const Persons = ({ persons, filters }) => {
  if (filters.useFilters && filters.name) {
    const newPersonsObject = persons.filter(person =>
      person.name.toLowerCase().includes(filters.name.toLowerCase())
    );
    
    return (
      newPersonsObject.map(person =>
        <li key={person.id}>{person.name}: {person.number}</li>
      )
    )
  } else {
    return (
      persons.map(person =>
        <li key={person.id}>{person.name}: {person.number}</li>
      )
    )
  };
};

export default Persons;
