import React from 'react';
import Navbar from './Navbar'; // Import your Navbar component
import Footer from './Footer';
import { Outlet } from 'react-router-dom' ;

const Layout = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
      <Outlet /> {/* Render the content of routed components */}
      </main>
      <footer>
        {/* Footer content goes here */}
      </footer>
    </div>
  );
}

export default Layout;
