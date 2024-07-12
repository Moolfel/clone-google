import React from 'react';
import '../styles/Header.css';

// TODO: Replace with user icon
const Header = () => (
  <header className="header">
    <div className="header-right">
      <a href="https://mail.google.com/mail/&ogbl">Gmail</a>
      <a href="https://www.google.com/imghp?hl=en&ogbl">Images</a>
      <div className="user-icon">
        <img src="" alt="User Icon" />
      </div>
    </div>
  </header>
);

export default Header;
