import React from 'react'
import { Container, Row, Col, Image, Button, Card } from 'react-bootstrap'
import MyCarousel from '../../components/Carousel/Carousel'
import TitleMessage from '../../components/TitleMessage/TitleMessage'

import ProfilePicture from '../../assets/img/profile/profPic.png'
import './AboutMe.css'


function AboutMe() {
  return (
    <>
      <div id="about">
        <div className="about">
          <style type="text/css">
            {`
            .colorType{
              color:white;
              border-style: solid;
              border-color:white;
            }
            .colorType:hover{
              color:yellow;
            }
            `}

          </style>
          <Container>
          <h1 className="pt-3 text-center pb-3">ABOUT ME</h1>

                  <Card style={{ wih: "10em" }} className="background">
                    <Image src={ProfilePicture} className="profile justify-content-end col-lg-4" alt="profilePicture" fluid rounded />
                    <Card.Body>
                      <Card.Title style={{color: "white", fontFamily: "'Pathway Gothic One', sans-serif", fontWeight: "400"}}>Sophia Orlando</Card.Title>
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
        </div>
      </div>
    </>
  )
}

export default AboutMe
