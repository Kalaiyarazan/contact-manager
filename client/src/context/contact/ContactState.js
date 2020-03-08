import React, { useReducer } from 'react';
import ContactContext from '../contact/contactContext';
import contactReducer from '../contact/contactReducer';
import { ADD_CONTACT } from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        name: 'Kalaiyarazan',
        email: 'kalaiyarazan@gmail.com',
        phone: '111-111-1111',
        type: 'personal'
      },
      {
        name: 'Chandru',
        email: 'chandru@gmail.com',
        phone: '222-222-2222',
        type: 'professional'
      },
      {
        name: 'Gunalan',
        email: 'gunalan@gmail.com',
        phone: '333-333-3333',
        type: 'personal'
      }
    ]
  };

  //Add a Contact

  //Update a Contact

  //Delete a Contact

  const [state, dispatch] = useReducer(contactReducer, initialState);

  return (
    <ContactContext.Provider value={{ contacts: state.contacts, ADD_CONTACT }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
