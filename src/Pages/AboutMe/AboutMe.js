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
                <h2>About <span>Me</span></h2>
                <p>
                    I am well-versed in the comprehensive stack of technologies 
                    required for MERN full-stack development, having diligently covered 
                    the fundamentals through Nxtwave Disruptive Technologies. With hands-on 
                    proficiency across the spectrum, I have adeptly crafted numerous static,
                    responsive, dynamic websites, and single-page applications.
                </p>
                <p>
                    Committed to industry best practices, I continually augment my expertise through a 
                    diverse array of resources including Google, YouTube, Scaler, and W3Schools and many other. My unwavering 
                    dedication to professional growth underscores my aspiration to consistently elevate my skills, 
                    positioning me as a formidable candidate poised to excel as a Software Developer.
                </p>
                <p>
                    In addition to my MERN stack capabilities, I have a 
                    solid knowledge of SQL, Python, Tailwind CSS, and other technologies. I am currently 
                    enhancing my skills in backend development, Python, and web development through internships 
                    at multiple companies. My experience includes working as a web development intern at CodingSamurai,
                    where I gained valuable industry experience and contributed to various projects.
                    I am actively seeking new opportunities and a dynamic team that will allow me to 
                    leverage my skills and take them to the next level.
                </p>
                <p>
                    I am actively seeking new opportunities and a dynamic team that will allow me to 
                    leverage my skills and take them to the next level.
                </p>
            </div>
            <Footer/>
        </div>
    );
};

export default AboutMe;
