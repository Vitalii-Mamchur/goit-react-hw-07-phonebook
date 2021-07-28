import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./Phonebook/phonebook-reducer";

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    // middleware,
    devTools: process.env.NODE_ENV === "development",
  },
});

export default store;

/*--------------  without Redux Toolkit  ----------------------
import { createStore, combineReducers } from "redux";
import contactsReducer from "./Phonebook/phonebook-reducer";

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
*/
