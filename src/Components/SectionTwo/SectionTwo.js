import React from 'react'
import { HeadingTitle } from '../HeadingTitle/HeadingTitle'
import SkillProgressBar from '../SkillProgressBar/SkillProgressBar'

const skills = [
    { skill: 'JAVASCRIPT', progress: 90 },
    { skill: 'REACT JS', progress: 95 },
    { skill: 'CSS', progress: 90 },
    { skill: 'NODE JS', progress: 95 },
    { skill: 'HTML', progress: 95 },
  ];
export const SectionTwo = () => {
  return (
    <div>
        <HeadingTitle heading="SKILLS"/>
        <div className='p-30 d-flex'>
            <div className='wx-50'>
                <span className='fs-25'>ABOUT</span>
                <p className='color-gold fs-20'>DESIGNER & DEVELOPER</p>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit Lorem ipsum dolor sit amet, consectetuer adipiscing elit Lorem ipsum dolor sit amet, consectetuer adipiscing elit Lorem ipsum dolor sit amet, consectetuer adipiscing elit Lorem ipsum dolor sit amet, consectetuer adipiscing elit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat.</p>
            </div>
            <div className='wx-50 pl-10 pr-10'>
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
