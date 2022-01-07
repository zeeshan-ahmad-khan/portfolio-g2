import React, { useState, useEffect } from 'react'
import ProjectsHeader from './ProjectsHeader'
import Contact from './Contact'
import Portfolio from './Portfolio';

function Projects() {

    const [resumeData, setResumeData] = useState({});

    useEffect(() => {
        fetch("/resumeData.json")
            .then((res) => res.json())
            .then((data) => {
                setResumeData(data);
            });
    }, []);

    console.log(resumeData)

    return (
        <div className="projects">
            <ProjectsHeader />
            <Portfolio data={resumeData.portfolio} />
            <Contact data={resumeData.main} />
        </div>
    )
}

export default Projects
