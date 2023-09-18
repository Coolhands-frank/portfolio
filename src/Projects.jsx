import React from "react"
import "./App.css"

function Projects(props){

    const projectElement = props.projects.map(project => {
        return (
            <div
                key = {project.id}
                className="card"
            >
                <img src={`./${project.coverImg}`} className="img"/>
                    <p3 className="project-discription">{project.title}</p3>
                    <h5>{project.description}</h5>
            </div>
        )
    })

    return(
        <div className="project-section">
            <h3 className="project-headtext">Project X</h3>
            <section className="project-grid">
                {projectElement}
            </section>
        </div>
    )
}

export default Projects