import React from "react"
import { useState, useEffect } from 'react'
import "./App.css"

function Footer(){
    const [currentDate, setCurrentDate] = useState(new Date())
    const currentYear = currentDate.getFullYear()

    // Use useEffect to update the time every second
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000)
        // Clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []) 

    const currentTime = currentDate.toLocaleTimeString("en-us", {timeStyle: "medium"})

    return (
        <footer className="footer-section">
            <div className="footer-div">
                <h3>@Copyright {currentYear}</h3>
                <h4>{currentTime}</h4>
            </div>
        </footer>
    )
}

export default Footer