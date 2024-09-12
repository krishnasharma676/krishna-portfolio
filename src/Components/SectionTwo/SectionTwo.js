import React from 'react'
import { HeadingTitle } from '../HeadingTitle/HeadingTitle'
import SkillProgressBar from '../SkillProgressBar/SkillProgressBar'
import './SectionTwo.css'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const skills = [
  { skill: 'JAVASCRIPT', progress: 90 },
  { skill: 'REACT JS', progress: 95 },
  { skill: 'CSS', progress: 90 },
  { skill: 'NODE JS', progress: 95 },
  { skill: 'HTML', progress: 95 },
];


export const SectionTwo = () => {
  const [aboutRef, aboutInView] = useInView({
    threshold: 0.1, // Adjust this value as needed
  });
  const [skillsRef, skillsInView] = useInView({
    threshold: 0.1, 
  });
  return (
    <div className="section-two">
      <HeadingTitle heading="SKILLS" />
      <div className='content-container'>
        <motion.div className='about-section'
        ref={aboutRef}
        initial={{ opacity: 0, y: 150 }}
        animate={aboutInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        >
          <span className='about-title'>ABOUT</span>
          <p className='designer-title'>DESIGNER & DEVELOPER</p>
          <p className='description'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit Lorem ipsum dolor sit amet, consectetuer adipiscing elit Lorem ipsum dolor sit amet, consectetuer adipiscing elit Lorem ipsum dolor sit amet, consectetuer adipiscing elit Lorem ipsum dolor sit amet, consectetuer adipiscing elit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat.</p>
          <div>
            <a href="/resume/krishna-resume-only.pdf" download className="button-style-primary">
              DOWNLOAD RESUME
            </a>
          </div>
        </motion.div>
        <motion.div className='skills-section'
        ref={skillsRef}
        initial={{ opacity: 0, y: 150 }}
        animate={skillsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        >
          {skills.map((item, index) => (
            <SkillProgressBar
              key={index}
              skill={item.skill}
              progress={item.progress}
            />
          ))}
        </motion.div>
      </div>
    </div>
  )
}
