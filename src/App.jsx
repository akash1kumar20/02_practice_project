import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UsersCard from "./components/UsersCard";
import { useState } from "react";
import UsersPage from "./components/UsersPage";

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
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/users"
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
          path="/users/details"
          element={<UsersCard userDetails={userDetails} />}
        />
      </Routes>
    </>
  );
}

export default App;
