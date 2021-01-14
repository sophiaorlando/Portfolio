// import logo from './logo.svg';
import React from 'react-bootstrap'
import { Slide, Fade } from 'react-reveal'
import { Parallax } from 'react-parallax'
import { Container } from 'react-bootstrap'

//components
import NavBar from "./components/NavBar/NavBar"
import Carousel from './pages/AboutMe/Carousel'
import TitleMessage from './components/TitleMessage/TitleMessage'
import AboutMe from './components/MeInfo/AboutMe'
import Skills from './pages/Skills/Skills'
import StarWarsCrawl from './components/StarWarsCrawl/StarWarsCrawl'
import ProjTabs from './components/ProjTabs/ProjTabs'
import ContactForm from './pages/ContactForm/ContactForm'
import Footer from './components/Footer/Footer'







import './App.css'


function App() {
  return (
    <div className="App" style={{ position: "relative" }}>

      <NavBar />

      <div>
        <Container className="container-box" rounded>
          <Slide left duration={900}>
            <StarWarsCrawl />

          </Slide>
        </Container>


      </div>

      <div>
        <Container className="container-box" rounded>
          <Slide left duration={900}>
            <ProjTabs />
          </Slide>
        </Container>


      </div>


      <div>
        <Container className="container-box" rounded>
          <Slide left duration={900}>
          <Carousel />
          {/* <AboutMe /> */}

          {/* <TitleMessage /> */}
          </Slide>
        </Container>


      </div>

      {/* <div>
        <Container className="container-box" rounded>
          <Slide left duration={900}>
            <AboutMe />
          </Slide>
        </Container>


      </div> */}

      {/* About Me Section */}
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          // bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
          className="parallax_background"
        >
          <Container className="about-me-container-box" rounded>
            <Slide left duration={900}>
              {/* <AboutMe /> */}

            </Slide>
          </Container>

        </Parallax>
      </div>
      {/* Skills */}

      <div>
        <Container className="container-box" rounded>
          <Slide left duration={900}>
            <Skills />
          </Slide>
        </Container>


      </div>
      {/* Projects */}
      {/* <div>
        <Container className="container-box" rounded>
          <Slide left duration={900}>
            <Projects />
          </Slide>
        </Container>


      </div> */}


      <Container className="container-box rounded">
        <Fade duration={500}>
          <hr />
          <ContactForm />
        </Fade>
      </Container>
      <hr />
      <Footer />
    </div>

  );
}

export default App;
