import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";
import AuthContext from "../context/AuthContext";

function Navbar() {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  const { isLoggedIn, user, login, logout } = useContext(AuthContext);

  function logInFunction() {
    login();
    navigate("/dashboard");
  }
  function logOutFunction() {
    logout();
    navigate("/");
  }
  return (
    <>
      <h5> In the {theme} mode</h5>
      <button onClick={() => navigate("/")}>Home</button>
      {isLoggedIn ? (
        <>
          <span>Hello, {user.name}</span>
          <button onClick={logOutFunction}>Logout</button>
        </>
      ) : (
        <button onClick={logInFunction}>Login</button>
      )}
    </>
  );
}

export default Navbar;
