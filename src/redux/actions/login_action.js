import axios from "axios";

const getUserAction = (user) => ({
  type: "GET_USER",
  payload: user,
});

export const isUserAuthAction = (accessToken) => ({
  type: "IS_USER_AUTH",
  payload: accessToken,
});

export const logOutAction = () => ({
  type: "LOG_OUT",
});
export const loginError = (error) => ({
  type: "LOGIN_ERROR",
  payload: error,
});

export const isUserAuthThunk =
  (login, password, pathName) => async (dispatch) => {
    try {
      await axios
        .post(`http://localhost:8000/auth/` + pathName, {
          email: login,
          password: password,
        })
        .then((resp) => {
          dispatch(isUserAuthAction(resp.data.access_token));
          dispatch(loginError(false));
        });
    } catch (e) {
      console.log(e.message);
      dispatch(loginError(true));
    }
  };

export const getUserThunk = () => async (dispatch) => {
  await axios.get("http://localhost:3001/users").then((res) => {
    dispatch(getUserAction(res.data));
  });
};
