/*
   Header
*/

import React from 'react';
import NavBar from 'pages/Landing/components/NavBar';
import NavDropdown from 'pages/Landing/components/NavDropdown';
import logoEmpava from 'media/landing/logo-empava.png';
import './styles.css';

const Header = () => (
  <header className="header">
    <div className="header-container">
      <div className="header-content">
        <img className="header-logo"
          src={logoEmpava}
          alt="Empava logo" />
        <div className="nav">
          <div className="nav-bar">
            <NavBar />
          </div>
          <div className="nav-dropdown">
            <NavDropdown />
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
