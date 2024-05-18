import React from 'react';
import Navbar from '../../Components/Navbar/Navbar.js';
import Footer from '../../Components/Footer/Footer.js';
import './Projects.css';

const Projects = () => {
    return (
        <div>
            <Navbar />
            <section className="projects" id="project">
                <h2 className="heading">My<span> Projects</span></h2>
                <div className="project-container">
                    {/* Project Cards Here */}
                    {/* Repeat the following block for each project */}
                    <div className="project-card">
                        <img
                            src="https://res.cloudinary.com/dffu1ungl/image/upload/v1709380062/Free_Vector___E-commerce_round_composition_iyyl6b.jpg"
                            alt="project2"
                            className="project-image"
                        />
                        <div className="project-content">
                            <h4>NxT Trendz</h4>
                            <p>
                                NxT Trendx is a E-Commerce website built using ReactJS. It's
                                replica of Flipkart or Amazon. Username: rahul, Password:
                                rahul@2021
                            </p>
                            <a href="https://bgk.ccbp.tech/login">
                                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            </a>
                        </div>
                    </div>
                    <div className="project-card">
                        <img
                            src="https://res.cloudinary.com/dhumgt3fp/image/upload/v1716055182/wooden-table-filled-with-sea-food-items-herbs-spices-plates-fish-dishes-with-sauces-herbs_667286-231_jvjoyp.jpg"
                            alt="project2"
                            className="project-image"
                        />
                        <div className="project-content">
                            <h4>NxT Trendz</h4>
                            <p>
                                NxT Trendx is a E-Commerce website built using ReactJS. It's
                                replica of Flipkart or Amazon. Username: rahul, Password:
                                rahul@2021
                            </p>
                            <a href="https://bgk.ccbp.tech/login">
                                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            </a>
                        </div>
                    </div>
                    <div className="project-card">
                        <img
                            src="https://res.cloudinary.com/dhumgt3fp/image/upload/v1716056275/Automated-task-management_omozxu.svg"
                            alt="project2"
                            className="project-image"
                        />
                        <div className="project-content">
                            <h4>NxT Trendz</h4>
                            <p>
                                NxT Trendx is a E-Commerce website built using ReactJS. It's
                                replica of Flipkart or Amazon. Username: rahul, Password:
                                rahul@2021
                            </p>
                            <a href="https://bgk.ccbp.tech/login">
                                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            </a>
                        </div>
                    </div>
                    <div className="project-card">
                        <img
                            src="https://res.cloudinary.com/dhumgt3fp/image/upload/v1716056088/Password-manager-1_esz1pr.png"
                            alt="project2"
                            className="project-image"
                        />
                        <div className="project-content">
                            <h4>NxT Trendz</h4>
                            <p>
                                NxT Trendx is a E-Commerce website built using ReactJS. It's
                                replica of Flipkart or Amazon. Username: rahul, Password:
                                rahul@2021
                            </p>
                            <a href="https://bgk.ccbp.tech/login">
                                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            </a>
                        </div>
                    </div>
                    <div className="project-card">
                        <img
                            src="https://res.cloudinary.com/dhumgt3fp/image/upload/v1716056058/27oDxUYHG9xiHxgktqespIj16pilDpimWsuJY0UDMl3mpAn9P2kGodn8Rr1ejNvULw_ptwwxj.png"
                            alt="project2"
                            className="project-image"
                        />
                        <div className="project-content">
                            <h4>NxT Trendz</h4>
                            <p>
                                NxT Trendx is a E-Commerce website built using ReactJS. It's
                                replica of Flipkart or Amazon. Username: rahul, Password:
                                rahul@2021
                            </p>
                            <a href="https://bgk.ccbp.tech/login">
                                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            </a>
                        </div>
                    </div>
                    <div className="project-card">
                        <img
                            src="https://res.cloudinary.com/dhumgt3fp/image/upload/v1716055957/Bayona-Feature.jpg_sr141c.png"
                            alt="project2"
                            className="project-image"
                        />
                        <div className="project-content">
                            <h4>NxT Trendz</h4>
                            <p>
                                NxT Trendx is a E-Commerce website built using ReactJS. It's
                                replica of Flipkart or Amazon. Username: rahul, Password:
                                rahul@2021
                            </p>
                            <a href="https://bgk.ccbp.tech/login">
                                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            </a>
                        </div>
                    </div>
                    {/* End of Project Cards */}
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Projects;
