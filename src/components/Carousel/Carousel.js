import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './Carousel.css'
import slide1 from '../../assets/img/carousel/slide1.jpg'
import slide2 from '../../assets/img/carousel/slide2.jpg'
import slide3 from '../../assets/img/carousel/slide3.jpg'
import ScrollDown from '../ScrollDown/ScrollDown'


function MyCarousel() {
  return (
    <>
      <div id="home">
        <Carousel controls={false} indicators interval={3000} pause={false}>
          <Carousel.Item>
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
        <ScrollDown />
      </div>
    </>
  )
}

export default MyCarousel
