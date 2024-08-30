import React from 'react';
import './SectionFive.css';
import { HeadingTitle } from '../HeadingTitle/HeadingTitle';
import imagebg from '../../images/imagebg.png'
export const SectionFive = () => {
  return (
    <div className="section-five">
      <HeadingTitle heading="Contact Us" />
      <div className="content">
        <div className="contact-details">
          <div className="detail">
            <div className="icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="info">
              <p>4671 Sugar Camp Road, Owatonna, Minnesota, 55060</p>
            </div>
          </div>
          <div className="detail">
            <div className="icon">
              <i className="fas fa-phone-alt"></i>
            </div>
            <div className="info">
              <p>561-455-2321</p>
            </div>
          </div>
          <div className="detail">
            <div className="icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="info">            
              <p>example@gmail.com</p>
            </div>
          </div>
          <div className='d-flex justify-content-center'>
          <img src={imagebg}/>
          </div>
        </div>
        <div className="contact-form">
          <h2>Send Message</h2>
          <form className="section-five-form">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Type your Message..." rows="4" required></textarea>
            <button className='button-style-primary'>SEND</button>
          </form>
        </div>
      </div>
    </div>
  );
};
