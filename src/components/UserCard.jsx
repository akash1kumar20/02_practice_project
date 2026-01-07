import { useNavigate } from "react-router-dom";

function UsersCard({ userDetails }) {
  const navigate = useNavigate();

  return (
    <div>
      <h3>Users Details are mentioned below:</h3>
      <ul>
        {userDetails.map((user) => (
          <li key={user.name}>
            Name : {user.name.toUpperCase()} & Email :{" "}
            {user.email.toUpperCase()}
          </li>
        ))}
      </ul>
      <button onClick={() => navigate("/user")}>Back</button>
    </div>
  );
}

export default UsersCard;
