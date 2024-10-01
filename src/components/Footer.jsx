import React from 'react'
import './Footer.css';

const Footer = () => {
    return (
      <div>
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-section">
              <h2 className="footer-logo">NEXTLUK</h2>
              <div className="social-icons">
                <a href="#" className="social-icon">f</a>
                <a href="#" className="social-icon">○</a>
              </div>
            </div>
  
            <div className="footer-section">
              <h3>About Nextluk</h3>
              <ul>
                <li>Add your business</li>
                <li>Join us</li>
                <li>Terms of Service</li>
                <li>Nextluk Cameroon</li>
                <li>Nextluk Cameroun</li>
                <li>Privacy policy</li>
                <li>Illegal content policy</li>
                <li>Cookie management</li>
              </ul>
            </div>
  
            <div className="footer-section">
              <h3>Find your service</h3>
              <ul>
                <li>Hairdresser</li>
                <li>Beauty salon</li>
                <li>Barber</li>
                <li>Manicure and pedicure</li>
                <li>Spa</li>
              </ul>
            </div>
  
            <div className="footer-section">
              <h3>Popular searches</h3>
              <ul>
                <li>Hairdresser Douala</li>
                <li>Hairdresser Yaoundé</li>
                <li>Hairdresser Bamenda</li>
                <li>Hairdresser Garoua</li>
              </ul>
            </div>
          </div>
  
          <div className="footer-bottom">
            <p>Copyright © 2024 Nextluk</p>
          </div>
        </footer>
      </div>
    );
  };

export default Footer;