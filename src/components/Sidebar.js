import React from 'react';

const Sidebar = ({ setActiveSection }) => (
  <div className="sidebar">
    <h1>Emir Tarık Dakın</h1>
    <ul>
      <li onClick={() => setActiveSection('education')}>Education</li>
      <li onClick={() => setActiveSection('experience')}>Experience</li>
      <li onClick={() => setActiveSection('projects')}>Projects & Research</li>
      <li onClick={() => setActiveSection('skills')}>Skills & Knowledge</li>
      <li onClick={() => setActiveSection('extracurricular')}>Extracurricular Activities</li>
      <li onClick={() => setActiveSection('languages')}>Languages</li>
    </ul>
  </div>
);

export default Sidebar;
