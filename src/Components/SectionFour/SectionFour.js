import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HeadingTitle } from '../HeadingTitle/HeadingTitle';
import image2 from '../../images/image2.jpg';
import image3 from '../../images/image3.jpg';
import image4 from '../../images/image4.jpg';
import image5 from '../../images/image5.jpg';
import './SectionFour.css';

export const SectionFour = () => {
  const portfolioImages = [image2, image3, image4, image5];

  // Animation variants
  const sectionAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const { ref, inView } = useInView({
    threshold: 0.1,   // Adjust this value as needed
  });

  return (
    <motion.div
      className="section-four"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={sectionAnimation}
    >
      <HeadingTitle heading="PORTFOLIO" />
      <div className="portfolio-grid">
        {portfolioImages.map((image, index) => (
          <div key={index} className="portfolio-item">
            <img src={image} alt={`Portfolio ${index + 1}`} />
          </div>
        ))}
      </div>
    </motion.div>
  );
};
