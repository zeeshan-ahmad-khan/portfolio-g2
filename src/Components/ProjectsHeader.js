import React from 'react'
import { Link } from 'react-router-dom'

function ProjectsHeader() {
    return (
        <header className="projects-header">
            <nav id="nav-wrap">
                <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
                    Show navigation
                </a>
                <a className="mobile-btn" href="#home" title="Hide navigation">
                    Hide navigation
                </a>

                <ul id="nav" className="nav">
                    <li className="current">
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <a href="#portfolio" className='smoothscroll'>Portfolio</a>
                    </li>
                    <li>
                        <a href="#contact" className='smoothscroll'>Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default ProjectsHeader
