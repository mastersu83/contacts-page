const initialState = {
  isAuth: null,
  users: [],
};

export const login_reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER":
      return { ...state, users: action.payload };

    case "IS_USER_AUTH":
      return { ...state, isAuth: "Bearer " + action.payload };
    case "LOG_OUT":
      console.log(action.payload);
      return { ...state, isAuth: null };
    default:
      return state;
  }
};
