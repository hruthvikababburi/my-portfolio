// src/components/Skills.js
import React from 'react';
import './Skills.css';

const skills = [
    { name: 'HTML', imageUrl: 'path/to/html.png' },
    { name: 'CSS', imageUrl: 'path/to/css.png' },
    { name: 'JavaScript', imageUrl: 'path/to/javascript.png' },
    { name: 'React', imageUrl: 'path/to/react.png' },
    { name: 'Node.js', imageUrl: 'path/to/nodejs.png' },
    { name: 'Express', imageUrl: 'path/to/express.png' },
    { name: 'MongoDB', imageUrl: 'path/to/mongodb.png' },
    // Add more skills as needed
];

const Skills = () => {
    return (
        <div className="skills">
            <h2>My Technical Skills</h2>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div key={index} className="skill">
                        <img src={skill.imageUrl} alt={skill.name} className="skill-image" />
                        <p>{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
