import { useState } from "react"
import { useQuery, useMutation } from "@apollo/client/react"

import { ALL_AUTHORS, UPDATE_AUTHOR } from "../queries"

const Authors = () => {
  const [born, setBorn] = useState(0);
  const authors = useQuery(ALL_AUTHORS)

  const [updateAuthor] = useMutation(UPDATE_AUTHOR, {
    onError: (error) => alert(error.message)
  })

  if (authors.loading) return <div>loading...</div>
  const submit = (event) => {
    event.preventDefault()
    const name = document.getElementById("author").value;
    updateAuthor({ variables: { name, born } })
    event.target.reset()
    setBorn(0)
  }

  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>born</th>
            <th>books</th>
          </tr>
          {authors.data.allAuthors.map((a) => (
            <tr key={a.id}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <h2>set birth year</h2>
        <form onSubmit={submit}>
          <select id="author">
            <option value="">Author name</option>
            {authors.data.allAuthors.map(author => (
              <option key={author.id} value={author.name}>{author.name}</option>
            ))}
          </select>
          <input value={born} onChange={({ target }) => setBorn(Number(target.value))} />new birth year
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Authors
