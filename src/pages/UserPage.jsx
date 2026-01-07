import { useNavigate } from "react-router-dom";

function UsersPage({ name, email, setName, setEmail, setUserDetails }) {
  const navigate = useNavigate();

  function formSubmission(e) {
    e.preventDefault();
    setUserDetails([
      {
        name: name,
        email: email,
      },
    ]);
    if (name) {
      navigate("/user/details");
      setEmail("");
      setName("");
    }
  }
  return (
    <>
      {!name && <p>No user added yet</p>}
      <form onSubmit={formSubmission}>
        <p>
          <input
            type="text"
            value={name}
            required
            placeholder="Enter your name here..."
            onChange={(e) => setName(e.target.value)}
          />
        </p>
        <p>
          <input
            type="email"
            value={email}
            required
            placeholder="Enter your email here..."
            onChange={(e) => setEmail(e.target.value)}
          />
        </p>
        <button>Submit</button>
        <button onClick={() => navigate("/")}>Back</button>
      </form>
    </>
  );
}

export default UsersPage;
