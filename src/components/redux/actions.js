import { createAction } from "@reduxjs/toolkit";
import { ADD_CONTACT, CHANGE_FILTER, DELETE_CONTACT } from "./types";

export const addContactAction = createAction(ADD_CONTACT);
export const deleteContactAction = createAction(DELETE_CONTACT);
export const changeFilterInput = createAction(CHANGE_FILTER);
