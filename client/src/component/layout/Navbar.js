import React from 'react';
import { IoMdContacts } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Navbar = ({ title = 'Contact Manager' }) => {
  return (
    <div className='navbar bg-success white'>
      <Link to='/' className='brand white'>
        <IoMdContacts size='40' />
        <h1>{title}</h1>
      </Link>

      <div className='menu'>
        <Link to='/' className='nav-btn'>
          Home
        </Link>
        <Link to='/about' className='nav-btn'>
          About
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
