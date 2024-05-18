// src/components/Certificates.js
import React from 'react';
import './Certificates.css';
import Navbar from '../../Components/Navbar/Navbar.js'

const certificates = [
    { id: 1, imageUrl: 'cloudinary-url-to-certificate1.png' },
    { id: 2, imageUrl: 'cloudinary-url-to-certificate2.png' },
    // Add more certificates here
];

const Certificates = () => {
    return (
        <div className="certificates">
            <Navbar/>
            <div className='certificates-context'>
                <h2>Certificates</h2>
                <div className="certificates-gallery">
                    {certificates.map(cert => (
                        <img key={cert.id} src={cert.imageUrl} alt={`Certificate ${cert.id}`} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Certificates;
