import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";

function Navbar() {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <h5> In the {theme} mode</h5>
      <button onClick={() => navigate("/")}>Home</button>
    </>
  );
}

export default Navbar;
