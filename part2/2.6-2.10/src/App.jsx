import { useState } from 'react';

import uuid from './utils/uuid_generator';
import Persons from './components/Persons';
import PersonAdditionForm from './components/PersonAdditionForm';
import Filter from './components/Filter';


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'John Doe', id: uuid(), phone: '1234567890' }
  ]);
  const [filters, setFilters] = useState(
    { useFilters: false, name: '' }
  );
  const [filteredName, setFilteredName] = useState('');

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filters={filters} filteredName={filteredName} setFilteredName={setFilteredName} setFilters={setFilters} />
      <PersonAdditionForm persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
      <ul>
        <Persons persons={persons} filters={filters} /> 
      </ul>
    </div>
  )
};

export default App;
