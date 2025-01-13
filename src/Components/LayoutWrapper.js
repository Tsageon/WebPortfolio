import React from 'react';
import Footer from './footer'; 

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <main className="content">
        {children} 
      </main>
      <Footer /> 
    </div>
  );
};

export default Layout;
