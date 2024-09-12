import './App.css';
import { Header } from './Components/Header/Header';
import { SectionOne } from './Components/SectionOne/SectionOne';
import { useState, useEffect, useRef } from 'react';
import { SectionTwo } from './Components/SectionTwo/SectionTwo';
import { SectionThree } from './Components/SectionThree/SectionThree';
import { SectionFour } from './Components/SectionFour/SectionFour';
import { SectionFive } from './Components/SectionFive/SectionFive';
import Footer from './Components/Footer/Footer';

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

  return (
    <>
      <Header onSelect={handleSelect} activeSection={activeSection} />

      <div
        className="main-content-section"
        ref={sectionRefs.section1}
        id="section1"
      >
        <SectionOne
          name="Krishna Sharma"
          para="In my work, I prioritize performance, accessibility, and responsive design, ensuring that every project I undertake not only looks great but also performs seamlessly across all devices."
          onGetStarted={() => handleSelect('section2')}
        />
      </div>

      <div
        className="main-content-section"
        ref={sectionRefs.section2}
        id="section2"
      >
        <SectionTwo />
      </div>

      <div
        className="main-content-section"
        ref={sectionRefs.section3}
        id="section3"
      >
        <SectionThree />
      </div>

      <div
        className="main-content-section"
        ref={sectionRefs.section4}
        id="section4"
      >
        <SectionFour />
      </div>

      <div
        className="main-content-section"
        ref={sectionRefs.section5}
        id="section5"
      >
        <SectionFive />
      </div>

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
