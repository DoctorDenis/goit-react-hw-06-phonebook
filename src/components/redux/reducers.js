import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  addContactAction,
  deleteContactAction,
  changeFilterInput,
} from "./actions";

const contacts = [
  {
    id: 1662110650283,
    name: "Denis Sychov",
    number: "11111111111",
  },
  {
    id: 1662110747927,
    name: "Polina Sychova",
    number: "324060",
  },
  {
    id: 1662277512037,
    name: "Viktoriia",
    number: "654984321",
  },
];

const contactsReducer = createReducer(contacts, {
  [addContactAction]: (state, action) =>
    state.find((c) => c.name === action.payload.name)
      ? alert(`Sorry! Contact ${action.payload.name} already exists!`)
      : [...state, action.payload],

  [deleteContactAction]: (state, action) => [
    ...state.filter((contact) => contact.id !== action.payload),
  ],
});

const filterReducer = createReducer("", {
  [changeFilterInput]: (state, action) => action.payload,
});

export const rootReducer = {
  contacts: combineReducers({
    items: contactsReducer,
    filter: filterReducer,
  }),
};
