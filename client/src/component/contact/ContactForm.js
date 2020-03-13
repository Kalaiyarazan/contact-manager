import React, { Fragment, useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  const { addContact, current, clearCurrent, updateContact } = contactContext;

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal'
  });

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
      });
    }
  }, [contactContext, current]);

  const onChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    clearCurrent();
  };

  const { name, email, phone, type } = contact;
  return (
    <Fragment>
      <h1>{current ? 'Edit Contact' : 'Add Contact'}</h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            id='name'
            value={name}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            id='email'
            value={email}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='phone'>Phone</label>
          <input
            type='text'
            name='phone'
            id='phone'
            value={phone}
            onChange={onChange}
          />
        </div>
        <div className='form-group-radio'>
          <label>Contact Type</label>
          <br />
          <label>
            <input
              type='radio'
              name='type'
              value='personal'
              checked={type === 'personal'}
              onChange={onChange}
            />
            Personal
          </label>

          <label>
            <input
              type='radio'
              name='type'
              value='professional'
              checked={type === 'professional'}
              onChange={onChange}
            />
            Professional
          </label>
        </div>
        <input
          type='submit'
          value={current ? 'Update Contact' : 'Add Contact'}
          className='btn bg-primary'
        />
        <div>
          {current && (
            <input
              type='submit'
              value='clear'
              className='btn bg-dark'
              onClick={() => clearCurrent()}
            />
          )}
        </div>
      </form>
    </Fragment>
  );
};

export default ContactForm;
