import { Link } from 'gatsby';
import React, { useState } from 'react';
import { FaHome } from 'react-icons/fa';
import Logout from '../components/logout';

const Navbar = props => {
  return (
    <nav
      css={{
        display: 'flex',
        justifyContent: 'space-evenly',
        height: '50px',
        alignItems: 'center',
        backgroundColor: 'white',
        fontSize: '1.2em',
        marginRight: '20px',
        opacity: '0.3'
      }}
    >
      {props.children}
      <p>
        design a logo and when people click on it it goes back to profile page
      </p>
      <Link to='/planning/'>Planning</Link>
      <Link to='/habit/'>Habit</Link>
      <Logout></Logout>
    </nav>
  );
};
export default Navbar;
