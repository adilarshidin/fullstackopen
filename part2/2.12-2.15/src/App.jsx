import { useState, useEffect } from 'react';

import Persons from './components/Persons';
import PersonAdditionForm from './components/PersonAdditionForm';
import Filter from './components/Filter';

import { getPersonsRequest } from './utils/requests';


const App = () => {
  const [persons, setPersons] = useState([]);
  const [errorMessage, setErrorMessage] = useState("shiiii");

  const fetchPersons = () => { 
    getPersonsRequest()
      .then(data => setPersons(data));
  };

  useEffect(fetchPersons, []);

  const [filters, setFilters] = useState(
    { useFilters: false, name: '' }
  );
  const [filteredName, setFilteredName] = useState('');

  return (
    <div>
      <Notification message={errorMessage} />
      <h2>Phonebook</h2>
      <Filter filters={filters} setFilters={setFilters}
              filteredName={filteredName} setFilteredName={setFilteredName} />
      <PersonAdditionForm persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
      <ul>
        <Persons persons={persons} setPersons={setPersons} filters={filters} /> 
      </ul>
    </div>
  )
};

export default App;
