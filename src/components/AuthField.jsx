import React from "react";
import { Button, Divider, TextField } from "@mui/material";
import ErrorPopup from "./ErrorPopup";
import { useDispatch } from "react-redux";
import { isUserAuthThunk, logOutAction } from "../redux/actions/login_action";

export const AuthField = () => {
  const dispatch = useDispatch();
  const [loginErrorPopup, setLoginErrorPopup] = React.useState(false);
  const [registerErrorPopup, setRegisterErrorPopup] = React.useState(false);
  const [input, setInput] = React.useState({
    login: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const onLogging = () => {
    if (!input.login.length || !input.password.length) {
      setLoginErrorPopup(true);
    } else {
      dispatch(isUserAuthThunk(input.login, input.password, "login"));
    }
  };

  const registered = () => {
    if (!input.login.length || !input.password.length) {
      setRegisterErrorPopup(true);
    } else {
      dispatch(isUserAuthThunk(input.login, input.password, "register"));
      dispatch(logOutAction());
    }
  };

  return (
    <div className="field authField">
      <TextField
        onChange={handleChange}
        name="login"
        type="text"
        placeholder="Введите логин"
        variant="standard"
        fullWidth
        value={input.login}
      />
      <Divider />
      <br />
      <TextField
        onChange={handleChange}
        name="password"
        type="password"
        placeholder="Введите пароль"
        variant="standard"
        fullWidth
        value={input.password}
      />
      <Divider />
      <div className="check-buttons">
        <Button
          disabled={loginErrorPopup || registerErrorPopup}
          onClick={onLogging}
          variant="outlined"
        >
          Войти
        </Button>
        <Button
          disabled={loginErrorPopup || registerErrorPopup}
          onClick={registered}
          variant="outlined"
        >
          Регистрация
        </Button>
      </div>
      <ErrorPopup
        text={"Вы не зарегистрированны. Пройдите регистрацию"}
        closePopup={setLoginErrorPopup}
        errorPopup={loginErrorPopup}
      />
      <ErrorPopup
        text={"Оба поля должны быть заполнены"}
        closePopup={setRegisterErrorPopup}
        errorPopup={registerErrorPopup}
      />
    </div>
  );
};
