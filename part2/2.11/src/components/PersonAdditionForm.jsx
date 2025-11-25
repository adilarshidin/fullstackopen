import { useState } from 'react';

import uuid from '../utils/uuid_generator';


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
    const newNameToAdd = newName;
    const newPhoneToAdd = newPhone;

    let nameAlreadyExists = false;
    let phoneAlreadyExists = false;

    persons.forEach(person => {
      if (person.name === newNameToAdd) {
        nameAlreadyExists = true;
      } else if (person.phone === newPhoneToAdd) {
        phoneAlreadyExists = true;
      };
    });

    if (nameAlreadyExists) {
      alert(`${newNameToAdd} - such a name already exists.`);
    } else if (phoneAlreadyExists) {
      alert(`${newPhoneToAdd} - such a phone number already exists.`);
    } else {
      const newPersons = persons.concat(
        { name: newNameToAdd, id: uuid(), phone: newPhoneToAdd }
      );
      setPersons(newPersons);
      setNewName('');
      setNewPhone('');
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
