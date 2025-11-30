const Person = ({ person, persons, setPersons, setNotificationMessage }) => {
  const deletePerson = () => {
    if (window.confirm(`Delete ${person.name}?`)) {
      const newPersons = persons.filter(item =>
        item.id !== person.id
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
  };

  return (
    <li className="person" key={person.id}>
      {person.name}: {person.number}
      <button onClick={deletePerson}>delete</button>
    </li>
  )
};

export default Person;
