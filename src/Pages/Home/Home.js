// src/components/Home.js
import React, { useEffect, useContext } from 'react';
import './Home.css';
import Navbar from '../../Components/Navbar/Navbar.js'
import Footer from '../../Components/Footer/Footer.js'
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { ImMail } from "react-icons/im";
import { IoMdDownload } from "react-icons/io";
import { ActivePageContext } from '../../Context/ActivePageContext.js';

const Home = () => {
    const { setActivePage } = useContext(ActivePageContext);

    useEffect(() => {
        setActivePage('home');
    }, [setActivePage]);
    
    return (
        <div className="home">
            <Navbar/>
            <div className='home-sub-cont'>
                <div className='home-context'>
                    <h2>Welcome, I am</h2>
                    <h1>Hruthvika Babburi</h1>
                    <h3>Innovative Full-Stack Developer & <h3>Passionate Learner</h3></h3>
                    <p>Architecting End-to-End Solutions, Bridging Innovation with Technology</p>
                    <div class="connect-icons-cont">
                        <a href='https://github.com/hruthvikababburi' target='blank'>
                            <FaGithubSquare className='connect-icon'/>
                        </a>
                        <a href='https://www.linkedin.com/in/hruthvikababburi2508/' target='blank'>
                            <FaLinkedin className='connect-icon'/>
                        </a>
                        <a href='mailto:hruthvikababburi@gmail.com' target='blank'>
                            <ImMail className='connect-icon'/>  
                        </a>
                        
                    </div>
                    <a href='/Resumefile/HruthvikaResume2024.pdf' download='HruthvikaResume.pdf'>
                        <button>Download Resume <IoMdDownload className='download-icon'/></button>
                    </a>
                    
                    
                </div>
                <img src='https://res.cloudinary.com/dhumgt3fp/image/upload/v1716020254/Hruthvika_img_xmc6qg.jpg' alt='Hruthvika Babburi' className='hruthvika-img'/>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;
