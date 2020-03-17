import React, { Fragment, useContext } from 'react';
import { IoMdContacts, IoIosLogOut } from 'react-icons/io';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const Navbar = ({ title = 'Contact Manager' }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logout, user } = authContext;

  const onLogout = () => {
    logout();
  };

  const authLink = (
    <Fragment>
      <h4>Hello, {user && user.name}</h4>

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
