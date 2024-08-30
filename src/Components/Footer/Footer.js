import React from 'react';
import './Footer.css'; // Optional, if you prefer using a separate CSS file

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>We are a team of dedicated professionals committed to providing high-quality services and support.</p>
        </div>
        <div className="footer-section links">
          <h2>Links</h2>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p>Email: contact@example.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Main Street, City, Country</p>
        </div>
      </div>
      {/* <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
        <div className="social-media">
          <a href="#" className="social-icon">Facebook</a>
          <a href="#" className="social-icon">Twitter</a>
          <a href="#" className="social-icon">Instagram</a>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;