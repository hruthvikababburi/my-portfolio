// src/components/Certificates.js
import React from 'react';
import './Certificates.css';
import Navbar from '../../Components/Navbar/Navbar.js';
import Footer from '../../Components/Footer/Footer.js';

const certificates = [
    { image: 'https://res.cloudinary.com/dhumgt3fp/image/upload/v1716020421/StaticWebsite_NxtWave_page-0001_gbsm2l.jpg' },
    { image: 'https://res.cloudinary.com/dhumgt3fp/image/upload/v1716020407/ResponsiveWebsite_NxtWave_page-0001_eahwch.jpg' },
    { image: 'https://res.cloudinary.com/dhumgt3fp/image/upload/v1716020317/DynamicWebsApp_NxtWave_page-0001_wbhdwv.jpg' },
    { image: 'https://res.cloudinary.com/dhumgt3fp/image/upload/v1716020339/JSEssentials_NxtWave_page-0001_qeju6g.jpg' },
    { image: 'https://res.cloudinary.com/dhumgt3fp/image/upload/v1716020392/ResponsiveWebDesign-Flexbox_NxtWave_page-0001_xuqvgs.jpg' },
    { image: 'https://res.cloudinary.com/dhumgt3fp/image/upload/v1716020379/ProgrammingFoundationsWithPython_NxtWave_page-0001_eimncm.jpg' },
    { image: 'https://res.cloudinary.com/dhumgt3fp/image/upload/v1716020307/DeveloperFoundations_NxtWave_page-0001_wlxn0u.jpg' },
    { image: 'https://res.cloudinary.com/dhumgt3fp/image/upload/v1716020327/IntroductionToDBs_NxtWave_page-0001_jqfewc.jpg' },
    { image: 'https://res.cloudinary.com/dhumgt3fp/image/upload/v1716020367/Nodejs_NxtWave_page-0001_s0kbxm.jpg' },
    { image: 'https://res.cloudinary.com/dhumgt3fp/image/upload/v1716020548/Master_React.js_-Paid-_Netflix_OTT_platform_-_Scaler_bkqip5.png' },
    { image: 'https://res.cloudinary.com/dhumgt3fp/image/upload/v1716020512/Scaler_React_Certificate-2024_Jan_w9fand.png' },
    { image: 'https://res.cloudinary.com/dhumgt3fp/image/upload/v1716020526/Scaler_Architectures_Certificate-2024_luelux.png' },
    { image: 'https://res.cloudinary.com/dhumgt3fp/image/upload/v1716021323/Microsoft_PowerBI-JatabShah_fnt4nb.jpg' },
    { image: 'https://res.cloudinary.com/dhumgt3fp/image/upload/v1716020289/CodingSamurai-webdeveloper_certificate_page-0001_1_rojybe.jpg' }
];

const Certificates = () => {
    return (
        <div className="certificates">
            <Navbar />
            <div className="certificates-content">
                <h2>My Certificates</h2>
                <div className="certificates-grid">
                    {certificates.map((certificate, index) => (
                        <div key={index} className="certificate-box">
                            <img src={certificate.image} alt={`Certificate ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Certificates;
