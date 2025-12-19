import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router";

import LogoutButton from "./LogoutButton";

const Menu = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Navbar.Brand href="#">Blogs App</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#" as="span">
            <Link to="/blogs">Blogs</Link>
          </Nav.Link>
          <Nav.Link href="#" as="span">
            <Link to="/users">Users</Link>
          </Nav.Link>
          <LogoutButton />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menu;
