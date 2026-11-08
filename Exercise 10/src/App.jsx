import UserList from "./UserList";

function App() {

  const users = [
    { id: 1, name: "Ahmed Ali", email: "ahmed@gmail.com" },
    { id: 2, name: "Mohamed Hassan", email: "mohamed@gmail.com" },
    { id: 3, name: "Abdi Noor", email: "abdi@gmail.com" },
    { id: 4, name: "Fatima Omar", email: "fatima@gmail.com" }
  ];

  return (
    <div>
      <h1>User Management System</h1>

      <UserList users={users} />
    </div>
  );
}

export default App;