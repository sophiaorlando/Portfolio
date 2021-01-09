// import logo from './logo.svg';
import React from 'react-bootstrap'
//components
import NavBar from "./components/NavBar/NavBar"
import Carousel from './components/Carousel/Carousel'
import TitleMessage from './components/TitleMessage/TitleMessage'

import './App.css'


function App() {
  return (
    <div>

      <NavBar />
      <Carousel />
      <TitleMessage/>
    </div>

  );
}

export default App;
