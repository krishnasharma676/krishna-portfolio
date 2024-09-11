import './App.css';
import { Container } from './Components/Container/Container';
import { Header } from './Components/Header/Header';
import { SectionOne } from './Components/SectionOne/SectionOne';
import { useState, useEffect, useRef } from 'react';
import { SectionTwo } from './Components/SectionTwo/SectionTwo';
import { SectionThree } from './Components/SectionThree/SectionThree';
import { SectionFour } from './Components/SectionFour/SectionFour';
import { SectionFive } from './Components/SectionFive/SectionFive';
import Footer from './Components/Footer/Footer';
import { motion } from 'framer-motion'; // Import framer-motion

function App() {
  const [activeSection, setActiveSection] = useState('section1');

  const sectionRefs = {
    section1: useRef(null),
    section2: useRef(null),
    section3: useRef(null),
    section4: useRef(null),
    section5: useRef(null),
  };

  const handleSelect = (section) => {
    setActiveSection(section);
    window.scrollTo({
      top: sectionRefs[section].current.offsetTop,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    for (const [section, ref] of Object.entries(sectionRefs)) {
      if (ref.current.offsetTop <= scrollPosition && ref.current.offsetTop + ref.current.clientHeight > scrollPosition) {
        setActiveSection(section);
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Define a sliding animation from left to right
  // Slide in from the left
  const slideInFromLeft = {
    hidden: { opacity: 0, x: -100 },  // Hidden off-screen to the left
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }, // Animates to the original position
  };

  // Slide in from the right
  const slideInFromRight = {
    hidden: { opacity: 0, x: 100 },  // Hidden off-screen to the right
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }, // Animates to the original position
  };


  return (
    <>
      <Header onSelect={handleSelect} activeSection={activeSection} />

      <motion.div
        className="main-content-section"
        ref={sectionRefs.section1}
        id="section1"
        initial="hidden"
        animate="visible"
        variants={slideInFromLeft}
      >
        <SectionOne
          name="Krishna Sharma"
          para="In my work, I prioritize performance, accessibility, and responsive design, ensuring that every project I undertake not only looks great but also performs seamlessly across all devices."
          onGetStarted={() => handleSelect('section2')}
        />
      </motion.div>

      <motion.div
        className="main-content-section"
        ref={sectionRefs.section2}
        id="section2"
        initial="hidden"
        animate="visible"
        variants={slideInFromRight}
      >
        <SectionTwo />
      </motion.div>

      <motion.div
        className="main-content-section"
        ref={sectionRefs.section3}
        id="section3"
        initial="hidden"
        animate="visible"
        variants={slideInFromLeft}
      >
        <SectionThree />
      </motion.div>

      <motion.div
        className="main-content-section"
        ref={sectionRefs.section4}
        id="section4"
        initial="hidden"
        animate="visible"
        variants={slideInFromRight}
      >
        <SectionFour />
      </motion.div>

      <motion.div
        className="main-content-section"
        ref={sectionRefs.section5}
        id="section5"
        initial="hidden"
        animate="visible"
        variants={slideInFromLeft}
      >
        <SectionFive />
      </motion.div>

      <Footer
        onHomeClick={() => handleSelect('section1')}
        onSkillsClick={() => handleSelect('section2')}
        onWhatIDoClick={() => handleSelect('section3')}
        onProjectsClick={() => handleSelect('section4')}
        onContactClick={() => handleSelect('section5')}
      />
    </>
  );
}

export default App;
