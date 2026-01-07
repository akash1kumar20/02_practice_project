import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate("/")}>Home</button>
    </>
  );
}

export default Navbar;
