import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  addContactAction,
  deleteContactAction,
  changeFilterInput,
} from "./actions";

const contactsReducer = createReducer([], {
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
