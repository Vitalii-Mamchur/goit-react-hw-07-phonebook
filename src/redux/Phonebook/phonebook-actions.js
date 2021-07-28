import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const addContact = createAction("contact/add", ({ name, number }) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));
const deleteContact = createAction("contact/delete");
const changeFilter = createAction("contact / changeFilter");

export { addContact, deleteContact, changeFilter };
/*--------------  without Redux Toolkit  ----------------------
import types from "./phonebook-types";
import { v4 as uuidv4 } from "uuid";

const addContact = ({ name, number }) => ({
  type: types.ADD,
  payload: {
    id: uuidv4(),
    name,
    number,
  },
});

const deleteContact = (contactId) => ({
  type: types.DELETE,
  payload: contactId,
});

const changeFilter = (value) => ({
  type: types.CHANGE_FILTER,
  payload: value,
});

export default { addContact, deleteContact, changeFilter };
*/
