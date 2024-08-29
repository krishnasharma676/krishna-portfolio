import React from 'react';

const SkillProgressBar = ({ skill, progress }) => {
  return (
    <div style={{ marginBottom: '15px' }}>
      <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>{skill}</div>
      <div style={{ 
          width: '100%', 
          backgroundColor: '#fff', 
          borderRadius: '5px', 
          overflow: 'hidden' 
      }}>
        <div 
          style={{
            width: `${progress}%`,
            backgroundColor: '#ff0000',
            textAlign: 'center',
            padding: '1px 0',
            color: 'white',
            borderRadius: '5px'
          }}
          className='progrss-Container'
        >
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default SkillProgressBar;
