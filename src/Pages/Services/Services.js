// src/components/Services.js
import React from 'react';
import './Services.css';
import { FaLaptopCode, FaMobileAlt, FaReact, FaDatabase, FaPlug } from 'react-icons/fa';
import Navbar from '../../Components/Navbar/Navbar.js';
import Footer from '../../Components/Footer/Footer.js'

const services = [
    {
        title: 'Web Development',
        icon: <FaLaptopCode />,
        description: 'Building modern and efficient websites using the latest technologies.'
    },
    {
        title: 'Responsive Design',
        icon: <FaMobileAlt />,
        description: 'Creating designs that work seamlessly across all device types.'
    },
    {
        title: 'Single-Page Applications',
        icon: <FaReact />,
        description: 'Developing fast and dynamic SPAs with React and other modern frameworks.'
    },
    {
        title: 'Backend Development',
        icon: <FaDatabase />,
        description: 'Providing robust backend solutions with Node.js and Express.'
    },
    {
        title: 'API Integration',
        icon: <FaPlug />,
        description: 'Integrating third-party APIs to enhance functionality and performance.'
    }
];

const Services = () => {
    return (
        <div className="services">
            <Navbar />
            <div className="services-context">
                <h2>My <span>Services</span></h2>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-box">
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Services;
