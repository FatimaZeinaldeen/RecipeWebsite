import React from 'react';
import Navbar from '../Components/Navbar/index.js'; // Import your Navbar component
import Footer from '../Components/Footer/index.js';
import { Outlet } from 'react-router-dom' ;

const Layout = () => {
  return (
    <div>
      <header>
     <Navbar />
      </header>
      <main Style="margin-top:60px;">
      <Outlet /> {/* Render the content of routed components */}
      </main>
      <footer>
        <Footer />
      </footer>
    
    </div>
  );
}

export default Layout;
