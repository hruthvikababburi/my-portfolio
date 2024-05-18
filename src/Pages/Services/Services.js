// src/components/Services.js
import React from 'react';
import './Services.css';
import Navbar from '../../Components/Navbar/Navbar.js'

const Services = () => {
    return (
        <div className="services">
            <Navbar/>
            <div className='services-context'>
                <h2>My Services</h2>
                <ul>
                    <li>Web Development</li>
                    <li>Responsive Design</li>
                    <li>Single-Page Applications</li>
                    <li>Backend Development</li>
                    <li>API Integration</li>
                </ul>
            </div>
        </div>
    );
};

export default Services;
