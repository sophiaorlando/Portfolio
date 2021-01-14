import React from 'react'
import { Jumbotron, Button, Col, Row } from 'react-bootstrap'
import './ContactForm.css'

function ContactForm() {
  return (
    <div id="contact">
      <Jumbotron className="contact-jumbotron" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1520034475321-cbe63696469a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80")`, borderRadius: "25px" }}>
      <h1 className="pt-3 text-center font-details pb-3" >CONTACT ME</h1>
        
        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
            <div className="m-2">
              <a href="mailto:sophia19orlando@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-danger" title="sophia19orlando@gmail.com">
                  <i className="fas fa-envelope-square"></i> Email Me
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="www.linkedin.com/in/sophia-m-orlando" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-primary" title="Visit my LinkenIn">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </Button>
              </a>
            </div>

            <div className="m-2">
              <a href="https://github.com/sophiaorlando" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-warning" title="My other projects">
                  <i className="fab fa-github-square"></i> GitHub
                </Button>
              </a>
            </div>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  )
}

export default ContactForm
