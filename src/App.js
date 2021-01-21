// import logo from './logo.svg';
import React from 'react-bootstrap'
import { Slide, Fade, Zoom } from 'react-reveal'
import { Parallax } from 'react-parallax'
import { Container } from 'react-bootstrap'

//components
import NavBar from "./components/NavBar/NavBar"
import TitleMessage from './components/TitleMessage/TitleMessage'
import AboutMe from './pages/AboutMe/AboutMe'
import Skills from './pages/Skills/Skills'
import StarWarsCrawl from './components/StarWarsCrawl/StarWarsCrawl'
import ProjTabs from './components/ProjTabs/ProjTabs'
import ContactForm from './pages/ContactForm/ContactForm'
import Footer from './components/Footer/Footer'
// import ProjectPage from './pages/ProjectPage/ProjectPage'
import ProjectTabs from './pages/ProjectPage/ProjectPage'







import './App.css'


function App() {
  return (
    <div className="App" style={{ position: "relative" }}>

      {/* sticky NavBar */}


      <NavBar />

      {/* Intro */}

      <div>
        <Container className="container-box" rounded>
          <StarWarsCrawl />
        </Container>
      </div>

      {/* Projects */}

      <div>
        <Container className="container-box" rounded>
          <Zoom>
            <ProjectTabs />
          </Zoom>
        </Container>
      </div>

      {/* Skills */}

      <div>
        <Container className="container-box" rounded>
          <Zoom>
            <Skills />
          </Zoom>
        </Container>
      </div>

      {/* About Me */}

      <div>
        <Container className="container-box" rounded>
          <Zoom>
            <AboutMe />
          </Zoom>
        </Container>
      </div>

      {/* Footer */}

      <hr />
      <Footer />
    </div>

  );
}

export default App;
