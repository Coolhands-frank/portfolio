import React from "react"
import "./App.css"

function Projects(props){

    const projectElement = props.projects.map(project => {
        return (
            <div
                key = {project.id}
                className="card"
            >
                <a href={project.url} target="_blank" className="icon1">
                    <img src={`./${project.coverImg}`} className="img" />
                </a>
                <h5>{project.title}</h5>
                <p3 className="project-description">{project.description}</p3>
            </div>
        )
    })

    return(
        <section className="project-section" id="projects">
            <div className="section-container">
                <h3 className="project-headtext" >PROJECTS</h3>
                <section className="project-flex">
                    {projectElement}
                </section>
            </div>
        </section>
    )
}

export default Projects