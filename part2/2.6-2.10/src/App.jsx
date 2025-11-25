import { useState } from 'react';

import uuid from './utils/uuid_generator';
import Persons from './components/Persons';
import PersonAdditionForm from './components/PersonAdditionForm';


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'John Doe', id: uuid(), phone: '1234567890' }
  ]);
  const [filters, setFilters] = useState([
    { useFilters: false, name: '' }
  ]);
  const [filteredName, setFilteredName] = useState('');

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
      <h2>Phonebook</h2>
      <div>
        <div>
          <p>Find person by name: <input value={filteredName} onChange={handleFilteredNameInput} /></p>
        </div>
      </div>
      <PersonAdditionForm persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
      <ul>
        <Persons persons={persons} filters={filters} /> 
      </ul>
    </div>
  )
};

export default App;
