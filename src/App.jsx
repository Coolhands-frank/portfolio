import React from "react"
import './App.css'
import Intro  from "./Intro"
import Projects from "./Projects"
import projectdata from "./projectdata"
// import NavBar from "./NavBar"

function App() {
  // Store the project data into a variable called projectData
  const projectData = projectdata
  

  return (
    <div>
    {/* <NavBar /> */}
      <Intro />
      <Projects 
        projects = {projectData}
      />
    </div>
  )
}

export default App
