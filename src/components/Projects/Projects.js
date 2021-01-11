import React, {useState} from 'react'
import { Container, Row, Image, Navbar, Nav } from 'react-bootstrap'
import './Projects.css'
import { Link } from 'react-router-dom'
import AccordionNavigation from '../Accordion/Accordion'


import { myProjects } from "./ProjectsData";


function Projects() {

  return (

    <div className="pt-3 pb-3" id="projects">
      <Container className="container-fluid">
      <h1 className="text-center font-details-b pb-4">My Projects</h1>

<AccordionNavigation/>
</Container>
    </div>
  )
}

export default Projects
