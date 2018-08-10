import React from 'react'
import Link from 'gatsby-link'
import animation from './animation.js'
import logo from '../../img/sw_logo.png'

export default class Hero extends React.Component {
  constructor(props){
    super(props)
  }

  scrollHandler = (e, target) => {  
    animation.jumpTo(target)
  }

  componentDidMount() {
    animation.sampleTween()
  }
  
  render() {
    return (
      <div id="home_hero" className="hero">
        <div className="hero-body">
          <div className="center">
          <img src={logo} alt="" id="home_hero_logo_animate" className="home_hero_logo"/>
            <div id="home_hero_title_animate" className="home_hero_title">
              Scholars Way
            </div>
            <div className="home_hero_sub_title">
              Healing Arts
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
