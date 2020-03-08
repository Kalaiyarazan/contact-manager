import React from 'react';
import { ADD_CONTACT } from '../types';

const contactReducer = (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return state;

    default:
      return state;
  }
};

export default contactReducer;
