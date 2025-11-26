import { useState } from 'react';

import { addPersonRequest, updatePersonRequest } from '../utils/requests';


const PersonAdditionForm = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');

  const handleNameInput = (event) => {
    const newNameInput = event.target.value;
    setNewName(newNameInput);
  };

  const handlePhoneInput = (event) => {
    const newPhoneInput = event.target.value;
    setNewPhone(newPhoneInput);
  };

  const handleNewPersonAddition = (event) => {
    event.preventDefault();
    const personToAdd = { 
      name: newName,
      id: String(persons.length + 1),
      number: newPhone
    };

    let nameAlreadyExists = false;
    let phoneAlreadyExists = false;
    let existingPerson = null;

    persons.forEach(person => {
      if (person.name === personToAdd.name) {
        existingPerson = person;
        nameAlreadyExists = true;
      } else if (person.number === personToAdd.number) {
        existingPerson = person;
        phoneAlreadyExists = true;
      };
    });

    if (nameAlreadyExists) {
      if(window.confirm(`${personToAdd.name} - such a name already exists, replace their phone number?`)) {
        updatePersonRequest(existingPerson.id, { ...existingPerson, number: personToAdd.number });
        const newPersons = persons.map(person => 
          person.name === personToAdd.name ? { ...person, number: personToAdd.number } : person
        );
        console.log(newPersons);
        setPersons(newPersons);
      };
    } else if (phoneAlreadyExists) {
      alert(`${personToAdd.number} - such a phone number already exists.`);
    } else {
      addPersonRequest(personToAdd)
        .then(data => {
          const newPersons = persons.concat(personToAdd);
          setPersons(newPersons);
          setNewName('');
          setNewPhone('');
        });
    };
  };

  return (
    <form>
      <div>
        <p>Name: <input value={newName} onChange={handleNameInput} /></p>
        <p>Phone: <input value={newPhone} onChange={handlePhoneInput} /></p>
        <button type="submit" onClick={handleNewPersonAddition}>Add a new person</button>
      </div>
    </form>
  )
};

export default PersonAdditionForm;
