import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import { useInView } from 'react-intersection-observer'; // Import useInView
import './SectionFive.css';
import { HeadingTitle } from '../HeadingTitle/HeadingTitle';
import imagebg from '../../images/imagebg.png';

export const SectionFive = () => {
  const [ref, inView] = useInView({    
    threshold: 0.2, // Adjust this value as needed for better responsiveness
  });

  // Define animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 }, // Start position (invisible and slightly moved down)
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }, // End position (fully visible and moved up to the original position)
  };

  return (
    <motion.div
      className="section-five"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInUp}
    >
      <HeadingTitle heading="Contact Us" />
      <div className="content">
        <motion.div
          className="contact-details"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
        >
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
            <img src={imagebg} alt="Background" />
          </div>
        </motion.div>
        <motion.div
          className="contact-form"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Send Message</h2>
          <form className="section-five-form">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Type your Message..." rows="4" required></textarea>
            <button className='button-style-primary'>SEND</button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};
