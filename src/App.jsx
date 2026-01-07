import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { useState } from "react";
import UsersPage from "./pages/UserPage";
import UsersCard from "./components/UserCard";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userDetails, setUserDetails] = useState([
    {
      name: "",
      email: "",
    },
  ]);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/user"
          element={
            <UsersPage
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              setUserDetails={setUserDetails}
            />
          }
        />
        <Route
          path="/user/details"
          element={<UsersCard userDetails={userDetails} />}
        />
      </Routes>
    </>
  );
}

export default App;
