import { deletePersonRequest } from "../utils/requests";


const Person = ({ person, persons, setPersons, setNotificationMessage }) => {
  const deletePerson = () => {
    if (window.confirm(`Delete ${person.name}?`)) {
      deletePersonRequest(person._id)
        .then(data => {
          if (!data) {
            setNotificationMessage({
              message: `Error deleting ${person.name}.`,
              type: "error"
            });
            setTimeout(() => setNotificationMessage({
              message: null,
              type: null
            }), 5000);  
          } else {
            const newPersons = persons.filter(item =>
              item._id !== person._id
            );
            setPersons(newPersons);
            setNotificationMessage({
              message: `${person.name} was deleted succesfully.`,
              type: "success"
            });
            setTimeout(() => setNotificationMessage({
              message: null,
              type: null
            }), 5000);
          };
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
