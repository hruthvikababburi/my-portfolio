import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar">
        <h1 className="navbar-brand">My Portfolio</h1>
        <ul className="navbar-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/aboutme">About Me</Link></li>
            <li><Link to="/services">My Services</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/certificates">Certificates</Link></li>
            <li><Link to="/contactme">Contact Me</Link></li>
        </ul>
    </nav>
  )
}
