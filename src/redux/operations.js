import axios from 'axios';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './actions';
// import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:4040';

const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());
  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error));
  }
};

// const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
//   const { data } = await axios.get('/contacts');
//   return data;
// });

const addContact = (name, number) => async dispatch => {
  const contact = {
    name,
    number,
  };

  dispatch(addContactRequest());

  try {
    const { data } = await axios.post('/contacts', contact);
    dispatch(addContactSuccess(data));
  } catch (error) {
    dispatch(addContactError(error));
  }
};

// const addContact = createAsyncThunk(
//   ‘contacts/addContact’,
//   async (name, number) => {
//     const contact = {
//       name,
//       number,
//     };
//     const { data } = await axios.post(‘/contacts’, contact);
//     return data;
//   },
// );

const deleteContact = id => async dispatch => {
  dispatch(deleteContactRequest());
  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(deleteContactSuccess(id));
  } catch (error) {
    dispatch(deleteContactError(error));
  }
};

// const deleteContact = createAsyncThunk(‘contacts/deleteContact’, async id => {
//   await axios.delete(`/contacts/${id}`);
// });

const contactsOperations = {
  fetchContacts,
  addContact,
  deleteContact,
};
export default contactsOperations;
