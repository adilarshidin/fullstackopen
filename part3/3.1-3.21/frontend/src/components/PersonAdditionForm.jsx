import { useState } from 'react';

import { addPersonRequest, updatePersonRequest } from '../utils/requests';


const PersonAdditionForm = ({ persons, setPersons, setNotificationMessage }) => {
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
      number: newPhone
    };

    let existingPersonId = '';
    let phoneAlreadyExists = false;
    let existingPerson = null;

    persons.forEach(person => {
      if (person.name === personToAdd.name) {
        existingPerson = person;
        existingPersonId = person._id;
      } else if (person.number === personToAdd.number) {
        existingPerson = person;
        phoneAlreadyExists = true;
      };
    });

    if (existingPersonId) {
      if(window.confirm(`${personToAdd.name} - such a name already exists, replace their phone number?`)) {
        const newPersons = persons.map(person => 
          person.name === personToAdd.name ? { ...person, number: personToAdd.number } : person
        );

        updatePersonRequest({ id: existingPersonId, name: personToAdd.name, number: personToAdd.number })
          .then(result => {
            if (!result) {
              setNotificationMessage({
                message: `The person ${personToAdd.name} could not be added, error occured`,
                type: "error"
              });
              setTimeout(() => setNotificationMessage({
                message: null,
                type: null
              }), 5000);
            } else {
              setPersons(newPersons);
              setNotificationMessage({
                message: `The number for  ${personToAdd.name} was succesfully changed to ${personToAdd.number}.`,
                type: "success"
              });
              setTimeout(() => setNotificationMessage({
                message: null,
                type: null
              }), 5000);
            };
          });
      };
    } else if (phoneAlreadyExists) {
      setNotificationMessage({
        message: `${personToAdd.number} - such a phone number already exists.`,
        type: "error"
      });
      setTimeout(() => setNotificationMessage({
        message: null,
        type: null
      }), 5000);
    } else {
      const newPersons = persons.concat(personToAdd);

      addPersonRequest(personToAdd.name, personToAdd.number)
        .then(data => {
          if (!data.result) {
            setNotificationMessage({
              message: data.message,
              type: "error"
            });
            setTimeout(() => setNotificationMessage({
              message: null,
              type: null
            }), 5000);
          } else {
            setPersons(newPersons);
            setNewName('');
            setNewPhone('');
            setNotificationMessage({
              message: `${personToAdd.name} was added successfully.`,
              type: "success"
            });
            setTimeout(() => setNotificationMessage({
              message: null,
              type: null
            }), 5000);
          };
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
