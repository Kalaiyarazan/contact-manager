import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactContext from '../contact/contactContext';
import contactReducer from '../contact/contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACT,
  CLEAR_FILTER
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Kalaiyarazan',
        email: 'kalaiyarazan@gmail.com',
        phone: '111-111-1111',
        type: 'personal'
      },
      {
        id: 2,
        name: 'Chandru',
        email: 'chandru@gmail.com',
        phone: '222-222-2222',
        type: 'professional'
      },
      {
        id: 3,
        name: 'Gunalan',
        email: 'gunalan@gmail.com',
        phone: '333-333-3333',
        type: 'personal'
      }
    ],
    current: null,
    filtered: null
  };

  //Add a Contact
  const addContact = contact => {
    contact.id = uuidv4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  //Delete a Contact
  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  //Set Current
  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  //Clear Current
  const clearCurrent = contact => {
    dispatch({ type: CLEAR_CURRENT });
  };

  //Update a Contact
  const updateContact = contact => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };

  //Filter Contact
  const filterContact = text => {
    dispatch({ type: FILTER_CONTACT, payload: text });
  };

  //Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContact,
        clearFilter
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
