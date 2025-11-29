import { useState } from 'react';

import Persons from './components/Persons';
import PersonAdditionForm from './components/PersonAdditionForm';
import Filter from './components/Filter';
import Notification from './components/Notification';


const App = () => {
  const [persons, setPersons] = useState([
    {
      "name": "Arto Hellas",
      "number": "040-123456",
      "id": "1"
    },
    {
      "name": "Ada Lovelace",
      "number": "39-44-5323523",
      "id": "2"
    },
    {
      "name": "Dan Abramov",
      "number": "12-43-234345",
      "id": "3"
    },
    {
      "name": "Mary Poppendieck",
      "number": "39-23-6423122",
      "id": "4"
    }
  ]);
  const [filters, setFilters] = useState(
    { useFilters: false, name: "" }
  );
  const [filteredName, setFilteredName] = useState('');
  const [notificationMessage, setNotificationMessage] = useState(
    { message: "", type: "" }
  );

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
