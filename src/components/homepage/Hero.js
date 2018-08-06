import React from 'react'
import Link from 'gatsby-link'

export default class Hero extends React.Component {
  render() {
    return (
      <div id="home_hero" className="hero">       
        <div className="hero-body">
          <div className="center">
            <h1 className="title">Logo Here</h1>
            <div className="home_hero_title">
              Scholars Way
            </div>  
          </div>
        </div>   
      </div>
    )
  }
}
