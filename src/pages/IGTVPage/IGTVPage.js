import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { myProjects } from '../../components/Projects/ProjectsData'
import NavBar from '../../components/NavBar/NavBar'
import { Jumbotron, Container, Button } from 'react-bootstrap'
import './IGTVPage.css'


function ProjectPage(props) {

  let { id } = useParams()

  const imgSrc = myProjects.igtv[id].imgSrc
  const name = myProjects.igtv[id].name
  const projId = myProjects.igtv[id].id
  const description = myProjects.igtv[id].description
  const url = myProjects.igtv[id].url
  const software = myProjects.igtv[id].languages
  const video = myProjects.igtv[id].video





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
          <p> {software} </p>
          <p> {description} </p>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <Button className="cart" variant="outline colorType">View Live</Button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectPage
