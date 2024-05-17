// src/components/Projects.js
import React from 'react';
import './Projects.css';

const projects = [
    { id: 1, title: 'Project 1', imageUrl: 'path-to-your-project1.png', link: 'http://project1.com' },
    { id: 2, title: 'Project 2', imageUrl: 'path-to-your-project2.png', link: 'http://project2.com' },
    // Add more projects here
];

const Projects = () => {
    return (
        <div className="projects">
            <h2>Projects</h2>
            <div className="projects-gallery">
                {projects.map(project => (
                    <a key={project.id} href={project.link} target="_blank" rel="noopener noreferrer">
                        <img src={project.imageUrl} alt={project.title} />
                        <p>{project.title}</p>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Projects;
