import React, { Fragment, useContext } from 'react';
import { FaEnvelopeOpen, FaPhone } from 'react-icons/fa';
import ContactContext from '../../context/contact/contactContext';

const ContactItem = ({ contact }) => {
  const { _id, name, email, phone, type } = contact;
  const contactContext = useContext(ContactContext);

  const { deleteContact, setCurrent, clearCurrent } = contactContext;

  const onDelete = () => {
    deleteContact(_id);
    clearCurrent();
  };
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
        <button className='btn bg-dark' onClick={() => setCurrent(contact)}>
          Edit
        </button>
        <button className='btn bg-danger' onClick={onDelete}>
          Delete
        </button>
      </div>
    </Fragment>
  );
};

export default ContactItem;
