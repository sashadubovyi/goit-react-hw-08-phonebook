import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContacts,
  deleteContacts,
  fetchContacts,
} from 'services/phonebookAPI';

axios.defaults.baseURL = 'https:connections-api.herokuapp.com';

export const fetchContactThunk = createAsyncThunk(
  'contacts/fetchAll',
  async () => {
    return await fetchContacts();
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async number => {
    return await addContacts(number);
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    return await deleteContacts(id);
  }
);
