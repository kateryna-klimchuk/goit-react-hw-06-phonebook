import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { addContact, deleteContact, filterContact } from './actions';
import { INITIAL_CONTACTS } from 'data/data';

const items = createReducer(INITIAL_CONTACTS, {
  [addContact.type]: (state, action) => [...state, action.payload],
  [deleteContact.type]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});

const filter = createReducer('', {
  [filterContact.type]: (_, action) => action.payload.toLowerCase(),
});

export const rootReducer = combineReducers({ contacts: items, filter: filter });
