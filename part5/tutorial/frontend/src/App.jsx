import { useState, useEffect } from 'react';

import Content from "./components/Content";
import NoteAdditionForm from './components/NoteAdditionForm';
import LoginForm from './components/LoginForm';

import { getNotesRequest } from './utils/requests';


const App = () => {
  const [userData, setUserData] = useState({});
  const [userToken, setUserToken] = useState('');
  const [userName, setUserName] = useState('');
  const [notes, setNotes] = useState([]);
  const [importantFilter, setImportantFilter] = useState(false);
  const headerStyles = {
    color: "darkGreen",
    fontStyle: "italic"
  };

  const getNotes = () => {
    getNotesRequest()
      .then(data => setNotes(data))
  };
  useEffect(getNotes, []);

  const getLocalStorage = () => {
    const userData = JSON.parse(window.localStorage.getItem('user'));
    setUserData(userData);
  };
  useEffect(getLocalStorage, []);

  const handleImportantFilter = () => setImportantFilter(!importantFilter);

  const loginForm = () => <LoginForm setUserToken={setUserToken} setUserName={setUserName} />
  const notesBlock = () => {
    return (
      <div>
        <h3>User: {userName}</h3>
        <button onClick={handleImportantFilter}>{importantFilter ? 'show all notes' : 'show only important notes'}</button>
        <Content notes={notes} importantFilter={importantFilter} setNotes={setNotes} />
        <NoteAdditionForm userToken={userToken} notes={notes} setNotes={setNotes} />
      </div>
    )
  }

  return (
    <main>
      <h2 style={headerStyles}>Notes</h2>
      {!userToken && loginForm()}
      {userToken && notesBlock()}
      <p>Note app, Department of Computer Science, University of Helsinki 2025</p>
    </main>
  ) 
};

export default App;
