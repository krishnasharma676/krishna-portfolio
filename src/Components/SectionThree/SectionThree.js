import React, { useEffect, useState } from 'react';
import { HeadingTitle } from '../HeadingTitle/HeadingTitle';
import './SectionThree.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const SectionThree = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  // Detect screen size to handle mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // 768px as a typical mobile breakpoint
    };

    // Set initial screen size
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Define animation variants for the cards based on screen size
  const leftToRight = {
    hidden: { opacity: 0, x: isMobile ? -100 : -100 }, // Left to right for both mobile and desktop
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const rightToLeft = {
    hidden: { opacity: 0, x: isMobile ? -100 : 100 }, // On mobile, animate from left as well
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const bottomToUp = {
    hidden: { opacity: 0, y: isMobile ? -100 : 100 }, // Optional: On mobile, could animate from top for all if desired
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className='bg-white'>
      <HeadingTitle heading="WHAT I DO" />
      <div className='p-30 d-flex-cards' ref={ref}>
        {/* Left Card */}
        <motion.div
          className="card"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={leftToRight}
        >
          <div className="icon-circle">
            <i className="fas fa-laptop bg-grey fs-25"></i>
          </div>
          <h3>Responsive Mobile</h3>
          <p>Lavish CSS Template is designed by templatemo. Download, edit and use this layout.</p>
        </motion.div>

        {/* Middle Card */}
        <motion.div
          className="card"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={bottomToUp}
        >
          <div className="icon-circle">
            <i className="fas fa-link bg-grey fs-25"></i>
          </div>
          <h3>CSS Templates</h3>
          <p>We provide a wide range of HTML5 templates for free. Please spread a word about us on social media.</p>
        </motion.div>

        {/* Right Card */}
        <motion.div
          className="card"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={rightToLeft}
        >
          <div className="icon-circle">
            <i className="fas fa-paper-plane bg-grey fs-25"></i>
          </div>
          <h3>UI & UX Design</h3>
          <p>Credits go to Pixabay and Unsplash for images used in this free CSS website template.</p>
        </motion.div>
      </div>
    </div>
  );
}
