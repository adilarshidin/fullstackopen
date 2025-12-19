import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import { Table } from "react-bootstrap";

import { getUsersRequest } from "../utils/requests";

const Users = () => {
  const usersQuery = useQuery({
    queryKey: ["users"],
    queryFn: getUsersRequest
  });

  if (usersQuery.isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Users</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <td>
              name
            </td>
            <td>
              blogs created
            </td>
          </tr>
          {usersQuery.data.map(user =>
            <tr>
              <td>
                <Link to={`/users/${user.id}`}>{user.name}</Link>
              </td>
              <td>
                {user.blogs.length}
              </td>
            </tr>
          )}
        </thead>
      </Table>
    </div>
  );
};

export default Users;
