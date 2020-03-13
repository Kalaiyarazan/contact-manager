import React, { Fragment } from 'react';
import Contacts from '../contact/Contacts';
import ContactForm from '../contact/ContactForm';
import ContactFilter from '../contact/ContactFilter';

const Home = () => {
  return (
    <Fragment>
      <div className='home-container'>
        <div className='contact-form'>
          <ContactForm />
        </div>
        <div className='contacts'>
          <ContactFilter />
          <Contacts />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
