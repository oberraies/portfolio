import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Header.css';

function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };

    return (
        <header className="header">
            <div className="logo-container">
                <Link to="/" className="logo">Oussama Berraies</Link>
            </div>
            <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
                <ul className="nav-links">
                    <Link to="/">Accueil</Link>
                    <Link to="/cv">CV</Link>
                    <Link to="/projets">Projets</Link>
                    <Link to='/Templates'>Templates</Link>
                    <Link to="/contact">Contact</Link>
                    <li>
                        <a 
                            href="/assets/CV-Oussama-Berraies.pdf" 
                            download 
                            className="download-btn"
                        >
                            Télécharger le CV
                        </a>
                    </li>
                </ul>
                <div className="hamburger" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </header>
    );
}

export default Header;