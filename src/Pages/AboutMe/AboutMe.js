// src/components/AboutMe.js
import React from 'react';
import './AboutMe.css';
import Navbar from '../../Components/Navbar/Navbar.js'
import Footer from '../../Components/Footer/Footer.js'
const AboutMe = () => {
    return (
        <div className="about-me">
            <Navbar/>
            <div className='about-context'>
                <h2>About Me</h2>
                <p>I am well-versed in the comprehensive stack of technologies required for MERN 
                    full-stack development, having diligently covered the fundamentals through Nxtwave Disruptive
                    Technologies. With hands-on proficiency across the spectrum, I have adeptly crafted numerous static,
                    responsive, dynamic websites, and single-page applications. Committed to industry best practices,
                    I continually augment my expertise through a diverse array of resources including Google, YouTube,
                    Scaler, and W3Schools. My unwavering dedication to professional growth underscores my aspiration 
                    to consistently elevate my skills, positioning me as a formidable candidate poised to excel as a
                    Software Developer. I've also completed an internship as a web development intern at CodingSamurai 
                    and am currently working as an intern at multiple companies.
                </p>
            </div>
            <Footer/>
        </div>
    );
};

export default AboutMe;
