import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Welcome to User Hub</h1>
      <p>
        Connect with fellow members, share your latest projects, and stay up to
        date with the community. Whether you're here to learn or to lead, User
        Hub is where our collective journey happens.
      </p>
      <button onClick={() => navigate("/users")}>Add User</button>
    </>
  );
}
export default Home;
