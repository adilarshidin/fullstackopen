import { useState } from 'react'
import { useQuery } from '@apollo/client/react'

import Persons from "./components/Persons"
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'
import PhoneForm from './components/PhoneForm'
import { ALL_PERSONS } from './queries'

const App = () => {
  const [errorMessage, setErrorMessage] = useState(null)
  const result = useQuery(ALL_PERSONS)

  if (result.loading) {
    return <div>loading...</div>
  }

  return (
    <div>
      <Notification errorMessage={errorMessage} />
      <Persons persons={result.data.allPersons} />
      <PersonForm setError={setErrorMessage} />
      <PhoneForm setError={setErrorMessage} />
    </div>
  )
}

export default App