import React from 'react'

export const HeadingTitle = (props) => {
  console.log(props.background);
  
  return (
    <div className={`d-flex justify-content-center ${props.background}`}>
        <h1 className='fs-30 color-red bold-700 heading-with-line'>{props.heading}</h1>
    </div>
  )
}
