import React from 'react';
import '../styles/Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-top">
      <div className="footer-languages">
        <a href="#">Français</a>
        <a href="#">Kiswahili</a>
        <a href="#">Ikinyarwanda</a>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="footer-links">
        <a href="#">About</a>
        <a href="#">Advertising</a>
        <a href="#">Business</a>
        <a href="#">How Search works</a>
      </div>
      <div className="footer-country">Rwanda</div>
      <div className="footer-links-right">
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Settings</a>
      </div>
    </div>
  </footer>
);

export default Footer;
