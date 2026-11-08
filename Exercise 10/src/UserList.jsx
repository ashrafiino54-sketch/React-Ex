function UserList({ users }) {

  return (
    <div>
      <h2>Users List</h2>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default UserList;