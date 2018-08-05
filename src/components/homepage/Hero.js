import React from 'react'
import Link from 'gatsby-link'

export default class Hero extends React.Component {
  render() {
    return (
      <div id="home_hero" className="hero is-fullheight columns">      
        <div className="hero-head">
        </div>   
        <div className="hero-body columns">
          <div id="" className="column">
            <h1 className="title">picture here</h1>
          </div>
          <div className="column">
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
