import { useState } from "react"
import { useQuery } from "@apollo/client/react"

import { ALL_BOOKS } from "../queries"

const Books = () => {
  const [genre, setGenre] = useState(null)
  const books = useQuery(ALL_BOOKS)

  if (books.loading) return <div>loading...</div>
  const distinctGenres = [
    ...new Set(
      books.data.allBooks.flatMap(book => book.genres).filter(Boolean)
    )
  ]

  return (
    <div>
      <h2>books</h2>

      <table>
        <tbody>
          <tr>
            <th></th>
            <th>author</th>
            <th>published</th>
          </tr>
          { genre ?
            books.data.allBooks.map((a) => a.genres.includes(genre) ? (
              <tr key={a.id}>
                <td>{a.title}</td>
                <td>{a.author.name}</td>
                <td>{a.published}</td>
              </tr>
            ) : null) :
            books.data.allBooks.map((a) => (
            <tr key={a.id}>
              <td>{a.title}</td>
              <td>{a.author.name}</td>
              <td>{a.published}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <select onChange={({ target }) => setGenre(target.value)}>
        <option value="">Select genre to filter</option>
        {distinctGenres.map(genre => <option key={genre} value={genre}>{genre}</option>)}
      </select>
    </div>
  )
}

export default Books
