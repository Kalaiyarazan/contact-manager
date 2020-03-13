import React, { Fragment, useContext } from 'react';
import { FaEnvelopeOpen, FaPhone } from 'react-icons/fa';
import ContactContext from '../../context/contact/contactContext';

const ContactItem = ({ contact: { id, name, email, phone, type } }) => {
  const contactContext = useContext(ContactContext);

  const { deleteContact } = contactContext;

  const onDelete = () => {
    deleteContact(id);
  };
  return (
    <Fragment>
      <div className='card'>
        <h3>
          {name}
          {/* {'  '}
          <span className='badge'>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </span> */}
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
        <button className='btn bg-danger' onClick={onDelete}>
          Delete
        </button>
      </div>
    </Fragment>
  );
};

export default ContactItem;
