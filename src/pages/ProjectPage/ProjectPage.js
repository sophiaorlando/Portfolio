import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { myProjects } from '../../components/Projects/ProjectsData'
import NavBar from '../../components/NavBar/NavBar'
import { Jumbotron, Container, Button } from 'react-bootstrap'
import './ProjectPage.css'


function ProjectPage(props) {

  let { id } = useParams()

  const description = myProjects.fullStack[id].description
  const github = myProjects.fullStack[id].github
  // const projId = myProjects.fullStack[id].id
  // const imgSrc = myProjects.fullStack[id].imgSrc
  const languages = myProjects.fullStack[id].languages
  const name = myProjects.fullStack[id].name
  const url = myProjects.fullStack[id].url
  const video = myProjects.fullStack[id].video

  console.log(myProjects.fullStack[id].description)
  console.log(myProjects.fullStack[id])
  console.log(props)






  return (
    <div className="project-page">
      <div className="details">
        <div className="big-img">
          <img src={video} alt=""></img>
        </div>

        <div className="box">
          <div className="row">
            <h2> {name} </h2>
          </div>
          <p> {languages} </p>
          <p> {description} </p>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <Button className="cart" variant="outline colorType">GitHub</Button>
          </a>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <Button className="cart" variant="outline colorType">GitHub</Button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectPage
