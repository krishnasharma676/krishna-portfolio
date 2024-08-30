import React from 'react'
import { HeadingTitle } from '../HeadingTitle/HeadingTitle'
import SkillProgressBar from '../SkillProgressBar/SkillProgressBar'
import './SectionTwo.css'
const skills = [
  { skill: 'JAVASCRIPT', progress: 90 },
  { skill: 'REACT JS', progress: 95 },
  { skill: 'CSS', progress: 90 },
  { skill: 'NODE JS', progress: 95 },
  { skill: 'HTML', progress: 95 },
];
export const SectionTwo = () => {
  return (
    <div className="section-two">
      <HeadingTitle heading="SKILLS" />
      <div className='content-container'>
        <div className='about-section'>
          <span className='about-title'>ABOUT</span>
          <p className='designer-title'>DESIGNER & DEVELOPER</p>
          <p className='description'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit Lorem ipsum dolor sit amet, consectetuer adipiscing elit Lorem ipsum dolor sit amet, consectetuer adipiscing elit Lorem ipsum dolor sit amet, consectetuer adipiscing elit Lorem ipsum dolor sit amet, consectetuer adipiscing elit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat.</p>
          <div>
            <a href="/resume/krishna-resume-only.pdf" download className="button-style-primary">
              DOWNLOAD RESUME
            </a>
          </div>
        </div>
        <div className='skills-section'>
          {skills.map((item, index) => (
            <SkillProgressBar
              key={index}
              skill={item.skill}
              progress={item.progress}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
