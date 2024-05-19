// src/components/Footer.js
import React from 'react';
import { FaGithub} from 'react-icons/fa';
import './Footer.css';
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-links">
                    <a href="/" className="footer-link">Home</a>
                    <a href="/aboutme" className="footer-link">About Me</a>
                    <a href="/services" className="footer-link">Services</a>
                    <a href="/projects" className="footer-link">Projects</a>
                    <a href="/certificates" className="footer-link">Certificates</a>
                    <a href="/contact" className="footer-link">Contact</a>
                </div>
                <div className="footer-social">
                    <a href="https://github.com/hruthvikababburi" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="social-icon" size={28} />
                    </a>
                    <a href="https://www.linkedin.com/in/hruthvikababburi2508/" target="_blank" rel="noopener noreferrer">
                        <TiSocialLinkedinCircular className="social-icon" size={38}/>
                    </a>
                    <a href="mailto:hruthvikababburi@gmail.com" target="_blank" rel="noopener noreferrer">
                        <IoMdMail className="social-icon" size={28}/>
                    </a>
                </div>
                <div className="footer-copy">
                    <p>&copy; 2024 Hruthvika Babburi. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
