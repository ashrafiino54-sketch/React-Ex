
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleData = async () => {
    if (!name.trim()) {
      setError("Please enter a GitHub username");
      setUsers([]);
      return;
    }

    setLoading(true);
    setError("");
    setUsers([]);

    try {
      const response = await fetch(
        `https://api.github.com/users/${name.trim()}`
      );

      if (!response.ok) {
        throw new Error("GitHub user not found");
      }

      const data = await response.json();

      setUsers([data]);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1>GitHub User Search</h1>

      <input
        type="text"
        placeholder="Search username"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleData();
        }}
      />

      <button onClick={handleData}>Search</button>

      {loading && <p>Loading...</p>}
      {error &&  <p style={{ color: "red" }}>{error}</p>}

      {users.map((u) => (
        <div key={u.id}>
          <img
            src={u.avatar_url}
            alt={u.login}
            width="80"
          />

          <h2>{u.login}</h2>
          <p>Location: {u.location || "Not available"} </p>
           <p>Public Repositories: {u.public_repos} </p>
        </div>
      ))}
    </>
  );
}

export default App;
