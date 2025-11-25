import { useState, useEffect } from 'react';
import axios from 'axios';

import Persons from './components/Persons';
import PersonAdditionForm from './components/PersonAdditionForm';
import Filter from './components/Filter';


const App = () => {
  const [persons, setPersons] = useState([]);

  const fetchPersons = () => { axios
    .get("http://127.0.0.1:3001/persons")
    .then(response => {
      const result = response.data;
      setPersons(result);
    });
  };

  useEffect(fetchPersons, []);

  const [filters, setFilters] = useState(
    { useFilters: false, name: '' }
  );
  const [filteredName, setFilteredName] = useState('');

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filters={filters} setFilters={setFilters}
              filteredName={filteredName} setFilteredName={setFilteredName} />
      <PersonAdditionForm persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
      <ul>
        <Persons persons={persons} filters={filters} /> 
      </ul>
    </div>
  )
};

export default App;
