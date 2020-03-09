import React, { Fragment } from 'react';
import { FaEnvelopeOpen, FaPhone } from 'react-icons/fa';

const ContactItem = ({ contact: { name, email, phone, type } }) => {
  return (
    <Fragment>
      <div className='card'>
        <h3>
          {name}
          {'  '}
          <span className='badge'>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </span>
        </h3>
        <ul className='contact-list'>
          {email && (
            <li>
              <FaEnvelopeOpen />
              {'   '}
              {email}
            </li>
          )}
          {phone && (
            <li>
              <FaPhone /> {'   '}
              {phone}
            </li>
          )}
        </ul>
        <button className='btn bg-dark'>Edit</button>
        <button className='btn bg-danger'>Delete</button>
      </div>
    </Fragment>
  );
};

export default ContactItem;
