import React from 'react'
import { Accordion, AccordionContext, Card, Button } from 'react-bootstrap/'
import {Link} from 'react-router-dom'
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import { useContext } from 'react';
import { myProjects } from '../Projects/ProjectsData'

React.createContext(AccordionContext)

function ContextAwareToggle({ children, eventKey, callback }) {
  const currentEventKey = useContext(AccordionContext);


  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey),
  );

  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <button
      type="button"
      style={{ backgroundColor: isCurrentEventKey ? 'pink' : 'lavender' }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

function AccordionNav() {
  return (
    <Accordion>
      {/* full Stack Projects */}
      
      <Card>
      <Card.Header>
        <ContextAwareToggle eventKey="0">Full Stack Projects</ContextAwareToggle>
      </Card.Header>
      {myProjects.fullStack.map((project, index) => (
      <Accordion.Collapse eventKey="0">
        <Card.Body key={index}>
          <Card.Img variant="top" src={[project.imgSrc]} style={{width: "300px", height: "180px"}} />

          <Card.Title>{project.name}</Card.Title>

          <Card.Text>
            Hello! I'm the body

          </Card.Text>
          <Link to={"/projectpage/" + project.id}>
          <Button variant="primary">Go somewhere</Button>
          </Link>
        </Card.Body>
      </Accordion.Collapse>
       ))}
    </Card>
     

      {/* Videography */}
      <Card>
      <Card.Header>
        <ContextAwareToggle eventKey="1">Videography</ContextAwareToggle>
      </Card.Header>
      {myProjects.videography.map((project, index) => (
      <Accordion.Collapse eventKey="1">
        <Card.Body key={index}>
          <Card.Img variant="top" src={[project.imgSrc]} style={{width: "300px", height: "180px"}} />

          <Card.Title>{project.name}</Card.Title>

          <Card.Text>
            Hello! I'm the body

          </Card.Text>
          <Button variant="primary">Go somewhere</Button>

        </Card.Body>
      </Accordion.Collapse>
       ))}
    </Card>
      {/* IGTV */}
      <Card>
      <Card.Header>
        <ContextAwareToggle eventKey="2">IGTV</ContextAwareToggle>
      </Card.Header>
      {myProjects.igtv.map((project, index) => (
      <Accordion.Collapse eventKey="2">
        <Card.Body key={index}>
          <Card.Img variant="top" src={[project.imgSrc]} style={{width: "300px", height: "180px"}} />

          <Card.Title>{project.name}</Card.Title>

          <Card.Text>
            Hello! I'm the body

          </Card.Text>
          <Button variant="primary">Go somewhere</Button>

        </Card.Body>
      </Accordion.Collapse>
       ))}
    </Card>
    </Accordion>
  );
}

export default AccordionNav
