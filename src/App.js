import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('education');

  return (
    <div className="App">
      <div className="container">
        <Sidebar setActiveSection={setActiveSection} />
        <Content activeSection={activeSection} />
      </div>
    </div>
  );
}

export default App;
