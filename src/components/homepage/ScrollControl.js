import React from 'react'
import Link from 'gatsby-link'
import animation from './animation.js'

export default class ScrollControl extends React.Component {
  constructor(props){
    super(props)
  }

  scrollHandler = (e, target) => {  
    animation.jumpTo(target)
  }

  render() {
    return (
      <div id="scroll_control" className="jump_scroll">
        <span onClick={(e) => this.scrollHandler(e, "#clinic_hero")}>Clinic</span>
        <span onClick={(e) => this.scrollHandler(e, "#qigong_hero")}>Qigong</span>
        <span onClick={(e) => this.scrollHandler(e, "#home_hero")}>Back to Top</span>
      </div>
    )
  }
}



      