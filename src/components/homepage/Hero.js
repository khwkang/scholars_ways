import React from 'react'
import Link from 'gatsby-link'
import animation from './animation.js'

export default class Hero extends React.Component {
  constructor(props){
    super(props)
  }

  scrollHandler = (e, target) => {  
    animation.jumpTo(target)
  }

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
        <div className="hero-foot">
          <div id="scroll_control" className="jump_scroll">
          <p className="menu_sign">Quick Access -></p>
          <span onClick={(e) => this.scrollHandler(e, "#clinic_hero")}>Clinic</span>
          <span onClick={(e) => this.scrollHandler(e, "#qigong_hero")}>Qigong</span>
          <span onClick={(e) => this.scrollHandler(e, "#qigong_hero")}>Class</span>
          <span onClick={(e) => this.scrollHandler(e, "#qigong_hero")}>Events</span>
        </div>
        </div>
      </div>
    )
  }
}
