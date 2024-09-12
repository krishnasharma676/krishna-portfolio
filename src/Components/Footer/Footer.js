import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import { useInView } from 'react-intersection-observer'; // Import useInView
import './Footer.css'; // Optional, if you prefer using a separate CSS file

export const Footer = (props) => {
  const [ref, inView] = useInView({    
    threshold: 0.1, // Adjust this value as needed
  });

  // Define animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 }, // Start position (invisible and slightly moved down)
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }, // End position (fully visible and moved up to the original position)
  };

  return (
    <motion.footer
      className="footer"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInUp}
    >
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>We are a team of dedicated professionals committed to providing high-quality services and support.</p>
        </div>
        <div className="footer-section links">
          <h2>Links</h2>
          <ul>
            <li onClick={props.onHomeClick}>Home</li>
            <li onClick={props.onSkillsClick}>Skills</li>
            <li onClick={props.onWhatIDoClick}>What I Do</li>
            <li onClick={props.onProjectsClick}>Projects</li>
            <li onClick={props.onContactClick}>Contact Us</li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p>Email: contact@example.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Main Street, City, Country</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="social-media bg-red">
          <a href="#" className="social-icon fs-30"><i className="fab fa-instagram"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-github"></i></a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
