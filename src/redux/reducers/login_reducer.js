const initialState = {
  isAuth: null,
  loginError: true,
  users: [],
};

export const login_reducer = (state = initialState, action) => {
  switch (action.type) {
    case "IS_USER_AUTH":
      return { ...state, isAuth: "Bearer " + action.payload };
    case "LOG_OUT":
      return { ...state, isAuth: null };
    case "LOGIN_ERROR":
      return { ...state, loginError: action.payload };
    default:
      return state;
  }
};
