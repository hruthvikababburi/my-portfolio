// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Pages/Home/Home.js';
import AboutMe from './Pages/AboutMe/AboutMe.js';

import Services from './Pages/Services/Services.js';
import Projects from './Pages/Projects/Projects.js';
import Certificates from './Pages/Certificates/Certificates.js';
import Contact from './Pages/Contact/Contact.js';
import './App.css'

const App = () => {
    return (
        <div className='App'>
          <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aboutme" element={<AboutMe />} />
                <Route path="/services" element={<Services />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/certificates" element={<Certificates />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
        </div>
    );
};

export default App;
