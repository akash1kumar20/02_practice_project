import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading users...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }
  if (users.length === 0) {
    return <p>No users found.</p>;
  }

  return (
    <>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </>
  );
}

export default Users;
