import React from 'react'
import Link from 'gatsby-link'

export default class ClinicHero extends React.Component {
  render() {
    return (
      <div id="clinic_hero" className="hero is-fullheight columns">      
        <div className="hero-head">
        </div>   
        <div className="hero-body columns">
          <div className="column left">
            <h1 className="title">picture here</h1>
          </div>
          <div className="column right">
            Contents here
          </div>  
        </div>  
        <div className="hero-foot">
          I'm hero foot
        </div>       
      </div>
    )
  }
}