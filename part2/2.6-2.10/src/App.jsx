import { useState } from 'react';

import Persons from './components/Persons';
import uuid from './utils/uuid_generator';


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'John Doe', id: uuid(), phone: '1234567890' }
  ]);
  const [filters, setFilters] = useState([
    { useFilters: false, name: '' }
  ]);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [filteredName, setFilteredName] = useState('');

  const handleNameInput = (event) => {
    const newNameInput = event.target.value;
    setNewName(newNameInput);
  };

  const handlePhoneInput = (event) => {
    const newPhoneInput = event.target.value;
    setNewPhone(newPhoneInput);
  };

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
    <div>
      <h2>Phonebook</h2>
      <div>
        <div>
          <p>Find person by name: <input value={filteredName} onChange={handleFilteredNameInput} /></p>
        </div>
      </div>
      <form>
        <div>
          <p>Name: <input value={newName} onChange={handleNameInput} /></p>
          <p>Phone: <input value={newPhone} onChange={handlePhoneInput} /></p>
          <button type="submit" onClick={handleNewPersonAddition}>Add a new person</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        <Persons persons={persons} filters={filters} /> 
      </ul>
    </div>
  )
};

export default App;
