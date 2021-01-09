import React from 'react'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import ProfilePicture from '../../assets/img/profile/profPic.png'
import './AboutMe.css'


function AboutMe() {
  return (
    <>
      <div id="about">
        <div className="about">
          <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
          <Container>
            <Row className="pt-3 pb-5 align-items-center">

              {/* Profile Picture */}
              <Col xs={12} md={6}>
                <Row className="justify-content-center mb-2 mr-2 ">
                  <Image src={ProfilePicture} className="profile justify-content-end" alt="profilePicture" thumbnail fluid rounded />
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Contact Me
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://docs.google.com/document/d/1xRxno2DbYRoa2em5SR6_FY3u1pGXikhC5WwmlRCsvIg/export?format=pdf" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/sophiaorlando" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/sophia-m-orlando/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>

                </Row>
              </Col>

              {/* Description */}

              <Col xs={12} md={6}>
                <Row className=" align-items-start p-2 my-details rounded">
                  {/* <div className="star-wars-crawl">
                  <Crawl
                    title="Episode X"
                    subTitle="Sophia Orlando"
                    text="Contemplating my next move post-college, I decided to dive into the mysterious sea of
                    coding. The first time I had seen the words,
                    'Hello, World!', pop up on my computer screen, I haven't looked back. Take a look at my skills and some
                    of my recent projects."
                  />
                  </div> */}

                  <div class="fade"></div>

                  <section class="star-wars">
                    <div class="crawl">
                      <div class="title">
                        <p>Episode X</p>
                        <h1>Sophia Orlando</h1>
                      </div>

                      <p>Contemplating my next move post-college, I decided to dive into the mysterious sea of
                      coding. The first time I had seen the words,
                      "Hello, World!", pop up on my computer screen, I haven't looked back. Take a look at my skills and some
      of my recent projects.</p>
                    </div>
                  </section>
                </Row>
              </Col>
            </Row>
          </Container>
      </div>
    </div>
    </>
  )
}

export default AboutMe
