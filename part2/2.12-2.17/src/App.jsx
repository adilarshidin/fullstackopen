import { useState, useEffect } from 'react';

import Persons from './components/Persons';
import PersonAdditionForm from './components/PersonAdditionForm';
import Filter from './components/Filter';
import Notification from './components/Notification';

import { getPersonsRequest } from './utils/requests';


const App = () => {
  const [persons, setPersons] = useState([]);
  const [filters, setFilters] = useState(
    { useFilters: false, name: "" }
  );
  const [filteredName, setFilteredName] = useState('');
  const [notificationMessage, setNotificationMessage] = useState(
    { message: "", type: "" }
  );

  const fetchPersons = () => { 
    getPersonsRequest()
      .then(data => setPersons(data));
  };

  useEffect(fetchPersons, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification notificationMessage={notificationMessage} />
      <Filter filters={filters} setFilters={setFilters}
              filteredName={filteredName} setFilteredName={setFilteredName} />
      <PersonAdditionForm persons={persons} 
                          setPersons={setPersons}
                          setNotificationMessage={setNotificationMessage} />
      <h2>Numbers</h2>
      <ul>
        <Persons persons={persons}
                 setPersons={setPersons}
                 filters={filters}
                 setNotificationMessage={setNotificationMessage} /> 
      </ul>
    </div>
  )
};

export default App;
