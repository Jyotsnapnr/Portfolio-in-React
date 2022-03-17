import React, { useState} from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
    
     <h3><a href="#home">Jyotsna</a></h3>
      </div>
      <ul className="app__navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul> 
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="rgb(25, 160, 250)" fontSize={27} onClick={() => setToggleMenu(true)} style={{cursor: 'pointer'}} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdClose fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} style={{cursor: 'pointer', color: 'rgb(32, 176, 233)'}} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#skills" onClick={() => setToggleMenu(false)}>Skills</a></li>
              <li><a href="#projects" onClick={() => setToggleMenu(false)}>Projects</a></li>
              <li><a href="#education" onClick={() => setToggleMenu(false)}>Education</a></li>
              <li><a href="#experience" onClick={() => setToggleMenu(false)}>Experience</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;