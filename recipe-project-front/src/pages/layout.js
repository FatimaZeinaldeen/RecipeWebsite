import React from 'react';
import Navbar from '../Components/Navbar/index.js'; // Import your Navbar component

import { Outlet } from 'react-router-dom' ;

const Layout = () => {
  return (
    <React.Fragment>
      <header>
     <Navbar />
      </header>
      <main>
      <Outlet /> {/* Render the content of routed components */}
      </main>
    
    </React.Fragment>
  );
}

export default Layout;
