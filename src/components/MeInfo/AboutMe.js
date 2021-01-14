import React from 'react'
import { Container, Row, Col, Image, Button, Card, Jumbotron } from 'react-bootstrap'
import Tilt from "react-tilt";
import ship from '../../assets/img/aboutme/ship.gif'


import ProfilePicture from '../../assets/img/profile/profPic2.jpg'
import './AboutMe.css'


function AboutMe() {
  return (
    <>

      <style type="text/css">
        {`
            .colorType{
              color:white;
              border-style: solid;
              border-color:white;
            }
            .colorType:hover{
              color:white;
            }
            .header-name{
              color: white;
              font-family: 'Pathway Gothic One', sans-serif;
              color:white;
              font-weight:100;
              font-size: 40px;    
              font-weight: bold;
            }
            `}

      </style>
      <Jumbotron style={{ backgroundImage: `url("https://images.unsplash.com/photo-1520034475321-cbe63696469a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80")`, borderRadius: "25px" }}>

        <Container>
          <Card style={{backgroundColor: "transparent"}}>
            <Card.Body>
              <div>
                <Card.Title className="text-center header-name">
                  Sophia Orlando
                    </Card.Title>
              </div>
              <Image src={ProfilePicture} className="profile justify-content-end col-lg-8" alt="profilePicture" fluid rounded />
              <Card.Text>
                <ul>
                  <li className="listItems">
                    <strong>City:</strong> Greater New York Area
                          </li>
                  <li className="listItems">
                    <strong>Degree:</strong> University of Arizona, Bachelor of Arts in Information Science &amp; Electronic-Society
                          </li>
                          <li className="listItems">
                    <strong>Certification:</strong> University of California Los Angeles, Full Stack Web Development
                          </li>
                </ul>
              </Card.Text>
              <a href="#contact">
                <Button className="m-2" variant="outline colorType">
                  Contact Me
                      </Button>
              </a>
              <a href="https://docs.google.com/document/d/1xRxno2DbYRoa2em5SR6_FY3u1pGXikhC5WwmlRCsvIg/export?format=pdf" target="_blank" rel="noopener noreferrer">
                <Button className="m-2" variant="outline colorType">
                  My Resume
                      </Button>
              </a>
              <a href="https://github.com/sophiaorlando" target="_blank" rel="noopener noreferrer">
                <Button className="m-2" variant="outline colorType">
                  GitHub
                      </Button>
              </a>
              <a href="https://www.linkedin.com/in/sophia-m-orlando/" target="_blank" rel="noopener noreferrer">
                <Button className="m-2" variant="outline colorType">
                  LinkedIn
                      </Button>
              </a>
            </Card.Body>
          </Card>

        </Container>
      </Jumbotron>
    </>
  )
}

export default AboutMe
