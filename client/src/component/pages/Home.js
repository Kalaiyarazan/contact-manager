import React, { Fragment, useEffect, useContext } from 'react';
import Contacts from '../contact/Contacts';
import ContactForm from '../contact/ContactForm';
import ContactFilter from '../contact/ContactFilter';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

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
