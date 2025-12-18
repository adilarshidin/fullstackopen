import { Link } from "react-router";

import LogoutButton from "./LogoutButton";

const Menu = () => {
  return (
    <div>
      <Link to={"/blogs"}>Blogs</Link>
      <Link to={"/users"}>Users</Link>
      <LogoutButton />
    </div>
  );
};

export default Menu;
