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
                <p3 className="project-discription">{project.title}</p3>
                <h5>{project.description}</h5>
            </div>
        )
    })

    return(
        <section className="project-section">
            <div className="section-container">
                <h3 className="project-headtext" id="projects">PROJECTS</h3>
                <section className="project-flex">
                    {projectElement}
                </section>
            </div>
        </section>
    )
}

export default Projects