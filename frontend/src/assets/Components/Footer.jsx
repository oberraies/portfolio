import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import '../../styles/Footer.css';

const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer-left">
                <p>&#169; {new Date().getFullYear()} - Oussama Berraies - 
                    <a href="tel:+21699442879" className="whatsapp-icon">
                        <FaWhatsapp /> (+216) 99 44 28 79 - 
                    </a>
                    <a href="mailto:oberrraies@gmail.com"> oberrraies@gmail.com</a>
                </p>
            </div>
            <div className="footer-right">
                <a href="mailto:oberrraies@gmail.com" className="footer-icon">
                    <FaEnvelope />
                </a>
                <a href="https://www.linkedin.com/in/oussama-berraies" target="_blank" rel="noopener noreferrer" className="footer-icon">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/oberraies" target="_blank" rel="noopener noreferrer" className="footer-icon">
                    <FaGithub />
                </a>
            </div>
        </footer>
    );
};

export default Footer;