import React from 'react';

// Navigation component -- Creates onclick events for each item in the navbar. 
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-pills">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active bg-info text-white' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active bg-info text-white' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active bg-info text-white' : 'nav-link'}
        >
          Resume
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active bg-info text-white' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      
    </ul>
  );
}

export default NavTabs;
