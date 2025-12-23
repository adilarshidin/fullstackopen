import { useState } from 'react'
import { useQuery, useApolloClient, useSubscription } from '@apollo/client/react'

import Persons from "./components/Persons"
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'
import PhoneForm from './components/PhoneForm'
import LoginForm from "./components/LoginForm"
import { ALL_PERSONS, PERSON_ADDED } from './queries'

const updateCache = (cache, query, addedPerson) => {
  const uniqByName = (a) => {
    let seen = new Set()
    return a.filter((item) => {
      let k = item.name
      return seen.has(k) ? false : seen.add(k)
    })
  }

  cache.updateQuery(query, ({ allPersons }) => {
    return {
      allPersons: uniqByName(allPersons.concat(addedPerson)),
    }
  })
}

const App = () => {
  const [token, setToken] = useState(null);
  const client = useApolloClient()
  const [errorMessage, setErrorMessage] = useState(null)
  const result = useQuery(ALL_PERSONS)

  const logout = () => {
    setToken(null)
    localStorage.clear()
    client.resetStore()
  }

  useSubscription(PERSON_ADDED, {
    onData: ({ data, client }) => {
      const addedPerson = data.data.personAdded
      alert(`${JSON.stringify(addedPerson)} added`)
      updateCache(client.cache, { query: ALL_PERSONS }, addedPerson)
    }
  })

  if (!token) {
    return (
      <div>
        <Notification errorMessage={errorMessage} />
        <h2>Login</h2>
        <LoginForm
          setToken={setToken}
          setError={setErrorMessage}
        />
      </div>
    )
  }

  if (result.loading) {
    return <div>loading...</div>
  }

  return (
    <div>
      <Notification errorMessage={errorMessage} />
      <button onClick={logout}>Logout</button>
      <Persons persons={result.data.allPersons} />
      <PersonForm setError={setErrorMessage} />
      <PhoneForm setError={setErrorMessage} />
    </div>
  )
}

export default App