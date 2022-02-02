const initialState = [];

export const contacts_reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CONTACTS":
      return action.payload;
    case "ADD_CONTACT":
      let newContact = {
        name: action.payload.name,
        phone: action.payload.phone,
        accessToken: action.payload.accessToken,
      };
      return [...state, newContact];

    case "HANDLE_TASK_CHECK":
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, completed: !action.payload.completed }
          : task
      );

    case "REMOVE_TASK":
      return state.filter((item) => item.id !== action.id);

    case "CLEAR_ALL_TASKS":
      return [];

    case "TOGGLE_CHECK_ALL":
      return state.map((item) => ({
        ...item,
        completed: action.payload,
      }));

    default:
      return state;
  }
};
