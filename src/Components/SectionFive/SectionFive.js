import React from 'react';
import './SectionFive.css';
import { HeadingTitle } from '../HeadingTitle/HeadingTitle';

export const SectionFive = () => {
  return (
    <div className="section-five">
      <HeadingTitle heading="Contact Us" />
      <div className="content">
        <div className="contact-details">
          <h2>Contact Details</h2>
          <p>Phone: +123 456 7890</p>
          <p>Email: contact@example.com</p>
          <p>Address: 123 Main Street, City, Country</p>
        </div>
        <div className="contact-form">
          <form className='section-five-form'>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
            
            <button type="submit" className="button-style-primary">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};
