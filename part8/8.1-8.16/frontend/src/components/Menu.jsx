import { Link } from "react-router"

const Menu = ({ token, setToken }) => {
  const handleLogout = () => {
    localStorage.clear()
    setToken(null)
  }

  if (!token) {
    return (
      <div>
        <Link to="login"><button>Login</button></Link>
      </div>
    )
  } else {
    return (
      <div>
        <Link to="/authors"><button>Authors</button></Link>
        <Link to="/books"><button>Books</button></Link>
        <Link to="/books/add"><button>Add book</button></Link>
        <Link to="/books/favorite"><button>Favorite genre books</button></Link>
        <Link to="/logout"><button onClick={handleLogout}>Logout</button></Link>
      </div>
    )
  }
}

export default Menu;
