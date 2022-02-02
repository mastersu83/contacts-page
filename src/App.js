import Login from "./pages/Login";
import Contacts from "./pages/Contacts";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";

function App() {
  const history = useNavigate();
  const isAuth = useSelector((state) => state.login.isAuth);

  React.useEffect(() => {
    if (isAuth) {
      history("/contacts");
    }
  }, [isAuth]);

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/contacts" element={<Contacts />} />
      </Routes>
    </>
  );
}

export default App;
