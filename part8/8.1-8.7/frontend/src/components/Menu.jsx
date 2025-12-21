import { Link } from "react-router"

const Menu = () => {
  return (
    <div>
      <Link to="/authors"><button>Authors</button></Link>
      <Link to="/books"><button>Books</button></Link>
      <Link to="/books/add"><button>Add book</button></Link>
    </div>
  )
}

export default Menu;
