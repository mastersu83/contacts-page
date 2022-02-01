import React from "react";
import { Paper } from "@mui/material";
import { AuthField } from "../components/AuthField";

const Login = () => {
  return (
    <div className="App">
      <h1>Список Контактов</h1>
      <Paper className="wrapper">
        <Paper className="header" elevation={0}>
          <h2>Авторизация</h2>
        </Paper>
        <AuthField />
      </Paper>
    </div>
  );
};

export default Login;
