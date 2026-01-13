import { useContext } from "react";
import AuthContext from "../context/AuthContext";

function Dashboard() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <>
      {!isLoggedIn ? (
        <p>Access Denied</p>
      ) : (
        <div>
          <h2>Dashboard</h2>
          <p>This is a protected page.</p>
        </div>
      )}
    </>
  );
}

export default Dashboard;
