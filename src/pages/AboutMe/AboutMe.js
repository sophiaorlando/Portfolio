import React from 'react'
import { Container, Row, Col, Image, Button, Card, Jumbotron } from 'react-bootstrap'
import Tilt from "react-tilt";


import ProfilePicture from '../../assets/img/profile/profPic.png'
import './AboutMe.css'


function AboutMe() {
  return (
    <>
      <div id="about">

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
            }
            `}

          </style>

        <h1 className="pt-3 text-center pb-3">ABOUT ME</h1>
        <Tilt option={{ max: 5 }}>

        <Jumbotron className="jumbo-style">

          <Container>
              <Card  style={{backgroundImage:'url(https://images.unsplash.com/photo-1520034475321-cbe63696469a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)' }}>
                <Card.Body>
                  <div>
                    <Card.Title className="text-center header-name">
                      Sophia Orlando
                    </Card.Title>
                  </div>
                  <Image src={ProfilePicture} className="profile justify-content-end col-lg-4" alt="profilePicture" fluid rounded />
                  <Card.Text>
                        <ul>
                          <li className="listItems">
                            <strong>City:</strong> Greater New York Area
                          </li>
                          <li className="listItems">
                            <strong>Degree:</strong> University of Arizona, Bachelor of Arts in Information Science &amp; Electronic-Society
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
        </Tilt>
      </div>
    </>
  )
}

export default AboutMe
