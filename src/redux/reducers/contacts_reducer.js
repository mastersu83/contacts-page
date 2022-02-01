const initialState = [];

export const contacts_reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CONTACTS":
      return action.payload;
    case "ADD_TASK":
      let newTask = {
        text: action.payload.text,
        completed: action.payload.completed,
      };
      return [...state, newTask];

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
