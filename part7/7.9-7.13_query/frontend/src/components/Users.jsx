import { useQuery } from "@tanstack/react-query";

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
      <table>
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
                {user.name}
              </td>
              <td>
                {user.blogs.length}
              </td>
            </tr>
          )}
        </thead>
      </table>
    </div>
  );
};

export default Users;
