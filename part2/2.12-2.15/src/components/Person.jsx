import { deletePersonRequest } from "../utils/requests";


const Person = ({ person, persons, setPersons }) => {
  const deletePerson = () => {
    if (window.confirm(`Delete ${person.name}?`)) {
      deletePersonRequest(person.id)
        .then(data => {
          const newPersons = persons.filter(item =>
            item.id !== data.id
          );
          setPersons(newPersons);
        });
    };
  };

  return (
    <li className="person" key={person.id}>
      {person.name}: {person.number}
      <button onClick={deletePerson}>delete</button>
    </li>
  )
};

export default Person;
