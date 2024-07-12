import React from 'react';
import '../styles/Header.css';

const Header = () => (
  <header className="header">
    <div className="header-right">
      <a href="#">Gmail</a>
      <a href="#">Images</a>
      <div className="user-icon">
        // TODO: Replace with user icon
        <img src="" alt="User Icon" />
      </div>
    </div>
  </header>
);

export default Header;
