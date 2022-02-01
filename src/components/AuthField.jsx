import React from "react";
import { Button, Divider, TextField } from "@mui/material";
import ErrorPopup from "./ErrorPopup";
import { useDispatch, useSelector } from "react-redux";
import { isUserAuthThunk, logOutAction } from "../redux/actions/login_action";

export const AuthField = () => {
  const dispatch = useDispatch();
  const [popupErrorText, setPopupErrorText] = React.useState("");
  const [errorPopup, setErrorPopup] = React.useState(false);
  const [input, setInput] = React.useState({
    login: "",
    password: "",
  });

  const loginError = useSelector((state) => state.login.loginError);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const onLogging = () => {
    if (!input.login.length || !input.password.length) {
      setPopupErrorText("Вы не зарегистрированны. Пройдите регистрацию");
      setErrorPopup(true);
    } else {
      dispatch(isUserAuthThunk(input.login, input.password, "login"));
      if (loginError) {
        setPopupErrorText("Неверное имя пользователя или пароль");
        setErrorPopup(true);
      }
    }
  };

  const registered = () => {
    if (!input.login.length || !input.password.length) {
      setPopupErrorText("Оба поля должны быть заполнены");
      setErrorPopup(true);
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
        <Button disabled={errorPopup} onClick={onLogging} variant="outlined">
          Войти
        </Button>
        <Button disabled={errorPopup} onClick={registered} variant="outlined">
          Регистрация
        </Button>
      </div>
      <ErrorPopup
        text={popupErrorText}
        closePopup={setErrorPopup}
        errorPopup={errorPopup}
      />
    </div>
  );
};
