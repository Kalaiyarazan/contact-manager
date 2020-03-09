import React, { Fragment } from 'react';
import Contacts from '../contact/Contacts';
import ContactForm from '../contact/ContactForm';

const Home = () => {
  return (
    <Fragment>
      <div className='home-container'>
        <div className='contact-form'>
          <ContactForm />
        </div>
        <div className='contacts'>
          <Contacts />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
