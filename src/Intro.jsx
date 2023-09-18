import React from "react"
import "./App.css"
import { Twitter, GitHub, Mail } from 'react-feather'


function Intro() {
    return (
        <section className="intro-section">
            <div className="icons-div">
                <a href="https://twitter.com/ElenduFranklin" target="_blank"> 
                    <Twitter color="white" size="25" className="icon1"/>
                </a>
                    <GitHub color="white" size="25" className="icon2"/>
                    <Mail color="white" size="25" className="icon3"/>
            </div>
            <div className="intro-div">
                <h1>Elendu Franklin ___</h1>
                <h3>FullStack Developer</h3>
                <p>we can work together</p>
            </div>
        </section>
    )
}

export default Intro