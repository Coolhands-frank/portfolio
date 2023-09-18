import React from "react"
import { Twitter, GitHub, Linkedin } from 'react-feather'
import "./App.css"

function NavBar(){

    return (
        <nav className="nav-section">
            <div className="nav-text">
                <a href="#projects">
                    <h2>PROJECTS</h2>
                </a>
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
        </nav>
    )
}

export default NavBar