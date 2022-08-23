import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);
    const handleClick = () => setExpandNavbar(!expandNavbar);
  return (
    <div className='nav-container'>
        <Link to="/">
            <h1>Lightall</h1>
        </Link>
        <ul className={expandNavbar ? 'nav-menu active' : 'nav-menu'}>
            <li>
                <Link to="/About-Us"> About Us </Link>  
            </li>
            <li>
            <Link to="/Our-Services"> Our Services </Link>  
            </li>
            <li>
            <Link to="/contacts"> Contact </Link>  
            </li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
            {expandNavbar ? (<FaTimes size={20} style = {{ color: "#FFF" }} />) :
            (<FaBars size={20} style = {{ color: "#FFF" }} />)}
            
        </div>
    </div>
  )
}

export default Navbar