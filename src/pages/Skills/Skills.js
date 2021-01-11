import React from 'react'
import { Card, CardDeck, Image, Col, Row } from 'react-bootstrap'
import './Skills.css'
import { skills } from "./SkillsData";
// import Stars from '../../assets/img/skills/stars.jpg'
import Galaxy from '../../assets/img/skills/galaxy.jpg'



function Skills() {
  return (
    <div className="pt-3 pb-3" id="skills">
      <style type="text/css">
        {`
        .backgroundImg{
          background-image: url(../../assets/img/skills/stars.jpg);
          background-color:transparent;
        }
        `}

      </style>
      <h1 className="text-center font-details-b pb-4">TECH SKILLS</h1>
      <CardDeck>
        <Row className="d-flex justify-content-around">
          <Col md={4}>
            <Card className="focus mt-2 mb-2" >
              <Card.Body className="backgroundImg">
                {/* Languages */}
                <Card.Title className="text-center  card-title">Languages</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skills.languages.map((language, index) => (
                    <span className="p-2" key={index}>
                      <a className="text-dark text-decoration-none" href={language.link} target="_blank" rel="noopener noreferrer">
                        <Image src={language.imgSrc} alt={language.imgAltText} rounded className="image-style m-1"></Image> {language.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>

            {/* Back End */}
            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">Back End</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skills.backend.map((backEnd, index) => (
                    <span className="p-2" key={index}>
                      <a className="text-dark text-decoration-none" href={backEnd.link} target="_blank" rel="noopener noreferrer">
                        <Image src={backEnd.imgSrc} alt={backEnd.imgAltText} rounded className="image-style m-1"></Image> {backEnd.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>

            {/* Database */}

            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">Database</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skills.databases.map((skill, index) => (
                    <span className="p-2" key={index}>
                      <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                        <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* FrameWorks */}
          <Col md={4}>
            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">Frameworks</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skills.frameworks.map((framework, index) => (
                    <span className="p-2" key={index}>
                      <a className="text-dark text-decoration-none" href={framework.link} target="_blank" rel="noopener noreferrer">
                        <Image src={framework.imgSrc} alt={framework.imgAltText} rounded className="image-style m-1"></Image> {framework.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>

            {/* Libraries */}
            <Card className="focus mt-2 mb-2 ">
              <Card.Body>
                <Card.Title className="text-center  card-title">Libraries</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skills.libraries.map((library, index) => (
                    <span className="p-2" key={index}>
                      <a className="text-dark text-decoration-none" href={library.link} target="_blank" rel="noopener noreferrer">
                        <Image src={library.imgSrc} alt={library.imgAltText} rounded className="image-style m-1"></Image> {library.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>




            {/* Platforms */}
            <Col md={4}>
            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">Hosting Platforms</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skills.platforms.map((skill, index) => (
                    <span className="p-2" key={index}>
                      <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                        <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
            {/* Other */}

            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">Other Practices</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skills.other.map((skill, index) => (
                    <span className="p-2" key={index}>
                      <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                        <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </CardDeck>
    </div>
  )
}

export default Skills
