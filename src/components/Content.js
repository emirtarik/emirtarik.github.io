import React from 'react';
import Education from './Education';
import Experience from './Experience';

const Content = ({ activeSection }) => {
    return (
      <div className="content">
        {activeSection === 'education' && <Education />}
        {activeSection === 'experience' && <Experience />}
      </div>
    );
  };
  
  export default Content;
