import React from "react"
import { Twitter, GitHub, Linkedin } from 'react-feather'
import "./App.css"



function Intro() {
    return (
        <section className="intro-section">
            <div className="nav-text">
                <a href="#projects">
                    <h2>PROJECTS</h2>
                </a>
            </div>
            
            <div className="intro-div">
                <div className="div-myname">
                    <h1>Hello, my name is <span class="h1span">Franklin Elendu</span></h1>
                </div>
                <div className="work-disc">
                    <h3 className="h1span">Full Stack Developer</h3>
                    <p>I know we can work together</p>
                </div>
            </div>
            
            

            <div className="icons-div">
                <a href="www.linkedin.com/in/franklin-elendu" target="_blank" className="icon1">
                    <Linkedin color="white" size="25" />
                </a>
                <a href="https://github.com/Coolhands-frank" target="_blank" className="icon2">
                    <GitHub color="white" size="25" />
                </a>
                <a href="https://twitter.com/ElenduFranklin" target="_blank" className="icon3"> 
                    <Twitter color="white" size="25" />
                </a>
            </div>
        </section>
    )
}

export default Intro