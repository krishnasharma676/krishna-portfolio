import React from 'react';
import './Progressbar.css';

const SkillProgressBar = ({ skill, progress }) => {
  return (
    <div className="progress-container">
      <div className="skill-title">{skill}</div>
      <div className="progress-bar-background">
        <div 
          className="progress-bar"
          style={{ width: `${progress}%` }}
        >
          {/* <span className="progress-text">{progress}%</span> */}
        </div>
      </div>
    </div>
  );
};

export default SkillProgressBar;
