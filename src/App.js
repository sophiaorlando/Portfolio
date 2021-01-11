// import logo from './logo.svg';
import React from 'react-bootstrap'
import Slide from 'react-reveal/Slide'
import { Parallax } from 'react-parallax'
import { Container } from 'react-bootstrap'

//components
import NavBar from "./components/NavBar/NavBar"
import Carousel from './components/Carousel/Carousel'
import TitleMessage from './components/TitleMessage/TitleMessage'
import AboutMe from './pages/AboutMe/AboutMe'
import Skills from './pages/Skills/Skills'
import Projects from './components/Projects/Projects'
import StarWarsCrawl from './components/StarWarsCrawl/StarWarsCrawl'






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
            <Carousel />
            <TitleMessage />          
            </Slide>
        </Container>


      </div>

      <div>
        <Container className="container-box" rounded>
          <Slide left duration={900}>
            <AboutMe />
          </Slide>
        </Container>


      </div>

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
      <div>
        <Container className="container-box" rounded>
          <Slide left duration={900}>
            <Projects />
          </Slide>
        </Container>


      </div>


    </div>

  );
}

export default App;
