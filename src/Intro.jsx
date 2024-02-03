import React from "react"
import { Twitter, GitHub, Linkedin } from 'react-feather'
import "./App.css"



function Intro() {
    return (
        <section className="intro-section">         
            <div className="intro-div">
                <div className="div-myname">
                    <h1>Hello, my name is <span class="h1span">Franklin Elendu</span></h1>
                </div>
                <div className="work-disc">
                    <h3 className="h1span">Full Stack Developer</h3>
                    <p>I am certain, we can work together</p>
                </div>
                <a href="https://drive.google.com/file/d/1mOYQ4e_mnUiikkZTSuQXnSivG1r6YpgO/view?usp=drive_link" 
                target="_blank">
                    <h2 className="resume">RESUME</h2>
                </a>
            </div>
        </section>
    )
}

export default Intro