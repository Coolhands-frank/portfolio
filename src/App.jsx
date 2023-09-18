import React from "react"
import './App.css'
import Intro  from "./Intro"
import Projects from "./Projects"
import projectdata from "./projectdata"

function App() {

  const projectData = projectdata
  

  return (
    <div>
      <Intro />
      <Projects 
        projects = {projectData}
      />
    </div>
  )
}

export default App
