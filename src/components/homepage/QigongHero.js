import React from 'react'
import Link from 'gatsby-link'

export default class QigongHero extends React.Component {
  render() {
    return (
      <div id="qigong_hero">       
        <div className="columns">
          <div className="content_right column">
            <div className="content">
              <h1 className="home_header is-size-1-desktop is-size-2-touch">Qigong</h1>
              <div className="is-size-5">Oriental medicine is a thorough and gentle approach to healing. Each patient brings a unique clinical picture to the practitioner and receives treatment tailored to his or her specific needs. This natural form of healing is non-invasive and safe.</div>
              <Link to="">
                  <button className="button is-large">Learn More</button>
              </Link>
            </div>
          </div>  
          <div className="picture_left column">
            <h1 className="title">picture here</h1>
          </div>
        </div>  
      </div>
    )
  }
}