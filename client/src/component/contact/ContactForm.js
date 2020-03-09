import React, { Fragment, useState, useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal'
  });

  const contactContext = useContext(ContactContext);
  const { addContact } = contactContext;

  const onChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();
    addContact(contact);
  };

  return (
    <Fragment>
      <h1>Add Contact</h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input type='text' name='name' id='name' onChange={onChange} />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' id='email' onChange={onChange} />
        </div>
        <div className='form-group'>
          <label htmlFor='phone'>Phone</label>
          <input type='text' name='phone' id='phone' onChange={onChange} />
        </div>
        <div className='form-group-radio'>
          <label>Contact Type</label>
          <br />
          <label>
            <input
              type='radio'
              name='type'
              value='personal'
              onChange={onChange}
            />
            Personal
          </label>

          <label>
            <input
              type='radio'
              name='type'
              value='professional'
              onChange={onChange}
            />
            Professional
          </label>
        </div>
        <input type='submit' value='Add Contact' className='btn bg-primary' />
      </form>
    </Fragment>
  );
};

export default ContactForm;
