import React from "react";
import resource from "../utils/fetchUsers";

const UserList = () => {
  const users = resource.read();

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;
