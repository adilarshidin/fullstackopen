import Person from "./Person";


const Persons = ({ persons, setPersons, filters }) => {
  if (filters.useFilters && filters.name) {
    const newPersonsObject = persons.filter(person =>
      person.name.toLowerCase().includes(filters.name.toLowerCase())
    );

    return (
      newPersonsObject.map(person =>
        <Person key={person.id} person={person}
                persons={persons} setPersons={setPersons} />
      )
    )
  } else {
    return (
      persons.map(person =>
        <Person key={person.id} person={person}
                persons={persons} setPersons={setPersons} />
      )
    )
  };
};

export default Persons;
