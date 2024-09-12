import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import "./SectionOne.css";
import { AnimatedText } from './AnimatedText/AnimatedText';

export const SectionOne = (props) => {
  const text = ["Frontend Engineer.", "Editor.", 'Web Developer'];

  // Use useInView to track the visibility of the section
  const { ref, inView } = useInView({
    triggerOnce: false, // Allow multiple triggers on scroll
    threshold: 0.1,    // When 10% of the section is visible
  });

  // Define the animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const nameVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.6 } }
  };

  return (
    <motion.div
      className='vh90 sectionOne-main'
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      <div className='wx-50 p-30'>
        <motion.span
          className='p-5 fs-40 border-bold-2 color-red'
          variants={nameVariants}
        >
          {props.name}
        </motion.span>
        <motion.div
          variants={textVariants}
        >
          <AnimatedText texts={text} fontSize="20px" animate={inView} />
        </motion.div>
        <p>{props.para}</p>
        <motion.div
          variants={buttonVariants}
        >
          <button className='button-style-primary' onClick={props.onGetStarted}>GET STARTED</button>
        </motion.div>
      </div>
    </motion.div>
  );
};
