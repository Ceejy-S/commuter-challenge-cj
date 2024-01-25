// src/components/NavBar/NavBar.js
import React from 'react';
import './NavBar.css'; // If you created a separate CSS file

const sections = [
  "HOME", "ABOUT", "GET INVOLVED", "RESOURCES", "RESULTS", "CITY CONTACT",
];

const NavBar = () => {
  return (
    <nav>
      <ul>
        {sections.map((section) => (
          <li key={section}>{section}</li>
        ))}
        <li className="flag">
          <img src="/english-flag.png" alt="English Flag" />
          <span>English</span>
        </li>
        <li className="flag">
          <img src="/french-flag.png" alt="French Flag" />
          <span>French</span>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
