import React from 'react';
import Navbar from '../../Components/Navbar/Navbar.js';
import Footer from '../../Components/Footer/Footer.js';
import './Projects.css';
import { LiaExternalLinkAltSolid } from "react-icons/lia";
const Projects = () => {
    return (
        <div className='projects-cont'>
            <Navbar />
            <section className="projects" id="project">
                <h2 className="heading">My<span> Projects</span></h2>
                <div className="project-container">
                    
                    <div className="project-card">
                        <img
                            src="https://res.cloudinary.com/dhumgt3fp/image/upload/v1716058794/1_iAu65xDmvpVdBJgps6EDEw_vfyk5f.png"
                            alt="project1"
                            className="project-image"
                        />
                        <div className="project-content">
                            <h4>NxT Trendz</h4>
                            <p>
                                NxT Trendx is a E-Commerce website built using ReactJS. Username: rahul, Password:
                                rahul@2021
                            </p>
                            <a href="https://hrushoppingapp.ccbp.tech/login" target='blank'>
                                <LiaExternalLinkAltSolid size={25} className='redirect'/>
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
                            <h4>Task Manager</h4>
                            <p>
                            A comprehensive tool to help you organize, prioritize, and track your daily tasks efficiently.
                            </p>
                            <a href="https://todolist-tmanager.vercel.app/" target='blank'>
                                <LiaExternalLinkAltSolid size={25} className='redirect'/>
                            </a>
                        </div>
                    </div>
                    <div className="project-card">
                        <img
                            src="https://res.cloudinary.com/dhumgt3fp/image/upload/v1716059375/631f32ee984371cb97df4ce2_How_20to_20take_20notes_20from_20a_20textbook_lv4ycr.png"
                            alt="project3"
                            className="project-image"
                        />
                        <div className="project-content">
                            <h4>Snap Thought</h4>
                            <p>
                            An app for quickly noting and saving your spontaneous thoughts and ideas.
                            </p>
                            <a href="https://my-snapthought.vercel.app/" target='blank'> 
                                <LiaExternalLinkAltSolid size={25} className='redirect'/>
                            </a>
                        </div>
                    </div>
                    <div className="project-card">
                        <img
                            src="https://res.cloudinary.com/dhumgt3fp/image/upload/v1716056088/Password-manager-1_esz1pr.png"
                            alt="project4"
                            className="project-image"
                        />
                        <div className="project-content">
                            <h4>Password Manager</h4>
                            <p>
                            A secure solution to store, manage, and generate strong passwords for all your accounts. 
                            </p>
                            <a href="https://hrupswrdmanager.ccbp.tech/" target='blank'>
                                <LiaExternalLinkAltSolid size={25} className='redirect'/>
                            </a>
                        </div>
                    </div>
                    <div className="project-card">
                        <img
                            src="https://res.cloudinary.com/dhumgt3fp/image/upload/v1716056058/27oDxUYHG9xiHxgktqespIj16pilDpimWsuJY0UDMl3mpAn9P2kGodn8Rr1ejNvULw_ptwwxj.png"
                            alt="project5"
                            className="project-image"
                        />
                        <div className="project-content">
                            <h4>Money Manager</h4>
                            <p>
                            An intuitive application to manage your finances, track expenses, and budget your income effectively.
                            </p>
                            <a href="https://hrumoneymanager.ccbp.tech/" target='blank'>
                                <LiaExternalLinkAltSolid size={25} className='redirect'/>
                            </a>
                        </div>
                    </div>
                    
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Projects;
