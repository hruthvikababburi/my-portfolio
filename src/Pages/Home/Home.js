// src/components/Home.js
import React from 'react';
import './Home.css';
import Navbar from '../../Components/Navbar/Navbar.js'
const Home = () => {
    return (
        <div className="home">
            <Navbar/>
            <div className='home-sub-cont'>
                <div className='home-context'>
                    <h2>Welcome, I am</h2>
                    <h1>Hruthvika Babburi</h1>
                    <h3>Innovative Full-Stack Developer & <h3>Passionate Learner</h3></h3>
                    <p>Architecting End-to-End Solutions, Bridging Innovation with Technology</p>
                </div>
                <img src='https://res.cloudinary.com/dhumgt3fp/image/upload/v1716020254/Hruthvika_img_xmc6qg.jpg' alt='Hruthvika Babburi' className='hruthvika-img'/>

            </div>
        </div>
    );
};

export default Home;
