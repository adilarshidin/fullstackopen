import { useQuery } from "@apollo/client/react"

import { ALL_BOOKS } from "../queries"

const FavoriteGenre = () => {
  const books = useQuery(ALL_BOOKS)

  if (books.loading) return <div>loading...</div>
  const favoriteGenreBooks = books.data.allBooks.filter(book =>
    book.genres.includes(localStorage.getItem("favoriteGenre")))

    return (
    <div>
      <h2>books in the favourite genre</h2>

      <table>
        <tbody>
          <tr>
            <th></th>
            <th>author</th>
            <th>published</th>
          </tr>
          {favoriteGenreBooks.map((a) => (
            <tr key={a.id}>
              <td>{a.title}</td>
              <td>{a.author.name}</td>
              <td>{a.published}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default FavoriteGenre
