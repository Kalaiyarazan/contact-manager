import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactContext from '../contact/contactContext';
import contactReducer from '../contact/contactReducer';
import { ADD_CONTACT } from '../types';

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
    ]
  };

  //Add a Contact
  const addContact = contact => {
    contact.id = uuidv4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };
  //Update a Contact

  //Delete a Contact

  const [state, dispatch] = useReducer(contactReducer, initialState);

  return (
    <ContactContext.Provider value={{ contacts: state.contacts, addContact }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
