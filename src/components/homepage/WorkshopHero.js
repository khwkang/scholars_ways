import React from 'react'
import Link from 'gatsby-link'

export default class WorkshopHero extends React.Component {
  render() {
    return (
      <div id="workshop_hero">       
        <div className="columns">
          <div className="picture_left home_workshop_bg is-hidden-touch column">
          </div>
          <div className="column">
            <div className="content">
              <h1 className="home_header is-size-1-desktop is-size-2-touch">Workshop</h1>
              <div className="is-size-5">Oriental medicine is a thorough and gentle approach to healing. Each patient brings a unique clinical picture to the practitioner and receives treatment tailored to his or her specific needs. This natural form of healing is non-invasive and safe.</div>
              <Link to="/clinic/expertise">
                  <button className="button is-large">Learn More</button>
              </Link>
            </div>
          </div>  
          <div className="picture_left home_workshop_bg is-hidden-desktop column">
          </div>
        </div>   
      </div>
    )
  }
}