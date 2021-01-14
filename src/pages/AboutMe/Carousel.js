import React from 'react'
import { Carousel, Jumbotron } from 'react-bootstrap'
import './Carousel.css'
import slide1 from '../../assets/img/carousel/slide1.jpg'
import slide2 from '../../assets/img/carousel/slide2.jpg'
import slide3 from '../../assets/img/carousel/slide3.jpg'
import ScrollDown from '../../components/ScrollDown/ScrollDown'
import MeInfo from '../../components/MeInfo/AboutMe'


function MyCarousel() {
  return (
    <>
      <div id="about">
      <h1 className="text-center font-details pb-4">ABOUT ME</h1>

        <div className="overlay"></div>
        <div className="hero">
          <MeInfo />

        </div>

        <Carousel controls={false} indicators interval={3000} pause={false}>
          <Carousel.Item style={{ position: "relative" }}>
            <img
              className="d-block w-100 custom-img"
              src={slide1}
              alt="First slide"
            />


          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 custom-img"
              src={slide2}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 custom-img"
              src={slide3}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  )
}

export default MyCarousel
