import React from 'react';
import '../styles/Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-top">
      <div className="footer-languages">
        <a href="https://www.google.com/setprefs?sig=0_ZB-RiwKOb6NFYPjpg2xZ7FIPr54%3D&hl=fr&source=homepage&sa=X&ved=0ahUKEwjI9-Lz46GHAxUf-AIHHW4OCbAQ2ZgBCCA">Français</a>
        <a href="https://www.google.com/setprefs?sig=0_ZB-RiwKOb6NFYPjpg2xZ7FIPr54%3D&hl=sw&source=homepage&sa=X&ved=0ahUKEwjI9-Lz46GHAxUf-AIHHW4OCbAQ2ZgBCCE">Kiswahili</a>
        <a href="https://www.google.com/setprefs?sig=0_ZB-RiwKOb6NFYPjpg2xZ7FIPr54%3D&hl=rw&source=homepage&sa=X&ved=0ahUKEwjI9-Lz46GHAxUf-AIHHW4OCbAQ2ZgBCCI">Ikinyarwanda</a>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="footer-links">
        <a href="https://about.google/?utm_source=google-RW&utm_medium=referral&utm_campaign=hp-footer&fg=1">About</a>
        <a href="https://www.google.com/intl/en_rw/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1">Advertising</a>
        <a href="https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1">Business</a>
        <a href="https://google.com/search/howsearchworks/?fg=1">How Search works</a>
      </div>
      <div className="footer-country">Rwanda</div>
      <div className="footer-links-right">
        <a href="https://policies.google.com/privacy?hl=en-RW&fg=1">Privacy</a>
        <a href="https://policies.google.com/terms?hl=en-RW&fg=1">Terms</a>
        <a href="https://www.google.com/preferences?hl=en-RW&fg=1">Settings</a>
      </div>
    </div>
  </footer>
);

export default Footer;
