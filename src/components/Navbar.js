import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../styles/Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);
    const handleClick = () => setExpandNavbar(!expandNavbar);

    const links = [
        {
            id: 1,
            link: "home",
        },
        {
            id: 2,
            link: "about",
            linkName: "About Us",
        },
        {
            id: 3,
            link: "service",
            linkName: "Our Services",
        },
        {
            id: 4,
            link: "contact",
            linkName: "Contact",
        }
    ];

  return (
    <div className='nav-container_la'>
        <Link to="home">
            <h1 className='logo_nav'>LIGHT-ALL</h1>
        </Link>
        <ul className={expandNavbar ? 'nav-menu-la active' : 'nav-menu-la'}>
            {links.map(({ id, link, linkName }) => (
            <li
            key={id}
            >
                <Link to={link} smooth duration={500}>
                    {linkName}
                </Link>  
            </li>
            ))}
        </ul>
        <div className='hamburger' onClick={handleClick}>
            {expandNavbar ? (<FaTimes size={20} style = {{ color: "#FFF" }} />) :
            (<FaBars size={20} style = {{ color: "#FFF" }} />)}    
        </div>
    </div>
  )
}

export default Navbar