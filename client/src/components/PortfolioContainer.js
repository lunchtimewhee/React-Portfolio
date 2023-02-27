import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Resume from '../pages/Resume';
import Footer from '../components/Footer'

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // Render page based on 
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className='page-container'>
      <div className='contentWrap'>
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
      </div>
      <Footer />
    </div>
  );
}
