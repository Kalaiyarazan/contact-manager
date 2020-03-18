import React, { Fragment, useContext } from 'react';
import { IoMdContacts, IoIosLogOut } from 'react-icons/io';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import ContactContext from '../../context/contact/contactContext';

const Navbar = ({ title = 'Contact Manager' }) => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);
  const { isAuthenticated, logout, user } = authContext;
  const { clearContacts } = contactContext;

  const onLogout = () => {
    logout();
    clearContacts();
  };

  const authLink = (
    <Fragment>
      <h4>
        Hello, {user && user.name.charAt(0).toUpperCase() + user.name.slice(1)}
      </h4>

      <a href='#' className='nav-btn' onClick={onLogout}>
        <span>
          Log Out {'  '}
          <IoIosLogOut size='20px' />
        </span>
      </a>
    </Fragment>
  );

  const guestLink = (
    <Fragment>
      <Link to='/register' className='nav-btn'>
        Register
      </Link>
      <Link to='/login' className='nav-btn'>
        Login
      </Link>
    </Fragment>
  );

  return (
    <div className='navbar bg-success white'>
      <Link to='/' className='brand white'>
        <IoMdContacts size='40' />
        <h1>{title}</h1>
      </Link>
      <div className='menu'>{isAuthenticated ? authLink : guestLink}</div>
    </div>
  );
};

export default Navbar;
