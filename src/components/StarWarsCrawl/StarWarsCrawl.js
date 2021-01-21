import React from 'react'
import './StarWarsCrawl.css'
import Stars from '../../assets/img/Crawl/stars.jpg'
import { Zoom } from 'react-reveal'


function StarWarsCrawl() {
  return (
    <div id="home">
      <div className="fade"></div>

      <div>
        <Zoom cascade>
          <div>
            <h2 style={{ color: "white" }}>An innovative software engineer with emphasis on ReactJS and UX/UI design. Take a look at my skills and some
of my recent projects.</h2>
          </div>
        </Zoom>
      </div>

    </div>
  )
}

export default StarWarsCrawl
