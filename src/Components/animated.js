import React, { useEffect, useState } from 'react';
import './animatedBackground.css';

const ANimatedBackground = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setTheme(document.body.className || 'light');
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`animated-bg ${theme}`}>
      <div className="floating-shape" style={{ left: '10%' }}></div>
      <div className="floating-shape" style={{ left: '30%', width: '15px', height: '15px' }}></div>
      <div className="floating-shape" style={{ left: '60%', width: '25px', height: '25px' }}></div>
      <div className="floating-shape" style={{ left: '80%' }}></div>
    </div>
  );
};

export default ANimatedBackground;