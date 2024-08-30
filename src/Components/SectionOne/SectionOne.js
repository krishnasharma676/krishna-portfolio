import React from 'react'
import "./SectionOne.css"
import { AnimatedText } from './AnimatedText/AnimatedText'
export const SectionOne = (props) => {

  return (
    <div className='vh90 sectionOne-main'>
        <div className='wx-50 p-30'>
            <span className='p-5 fs-40 border-bold-2 color-red'>{props.name}</span>
            <AnimatedText texts={["Frontend Engineer.", "Backend Developer.", "Full Stack Developer."]} fontSize="20px" />
            <p>{props.para}</p>
            <div>
                <button className='button-style-primary'>GET STARTED</button>
            </div>
        </div>
    </div>
  )
}
