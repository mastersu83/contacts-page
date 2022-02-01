import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { login_reducer } from "./reducers/login_reducer";
import { contacts_reducer } from "./reducers/contacts_reducer";

let reducers = combineReducers({
  login: login_reducer,
  contacts: contacts_reducer,
});

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

window.store = store;

export default store;
