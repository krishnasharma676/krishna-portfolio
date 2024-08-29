import React from 'react'
import './Header.css'
export const Header = ({ onSelect, activeSection }) => {
  return (
    <header className="header">
      <div className="squares">
        <div className={`square ${activeSection === 'section1' ? 'bg-red' : 'bg-white'}`} onClick={() => onSelect('section1')}></div>
        <div className={`square ${activeSection === 'section2' ? 'bg-red' : 'bg-white'}`} onClick={() => onSelect('section2')}></div>
        <div className={`square ${activeSection === 'section3' ? 'bg-red' : 'bg-white'}`} onClick={() => onSelect('section3')}></div>
        <div className={`square ${activeSection === 'section4' ? 'bg-red' : 'bg-white'}`} onClick={() => onSelect('section4')}></div>
        <div className={`square ${activeSection === 'section5' ? 'bg-red' : 'bg-white'}`} onClick={() => onSelect('section5')}></div>
      </div>
    </header>
  )
}
