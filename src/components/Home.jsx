import { useNavigate } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";
import { useContext } from "react";

function Home() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <h2>Current Theme : {theme.toUpperCase()}</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <button onClick={() => navigate("/user")}>Users List</button>
    </>
  );
}

export default Home;
