import React from 'react';
import { Navbar } from 'react-bootstrap';

const NavBar = () => {
  return (
    <div>
      <Navbar bg='dark' variant='dark'>
        <Navbar.Brand href='/'>
          <i className='fas fa-user-astronaut fa-2x'></i>
        </Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default NavBar;
