import React from 'react'
import Link from 'gatsby-link'
import animation from './animation.js'

export default class BackToTop extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    animation.activateBackToTop()
  }

  scrollHandler = (e, target) => {  
    animation.jumpTo(target)
  }

  render() {
    return (
      <div id="back_to_top">
        <span onClick={(e) => this.scrollHandler(e, "#home_hero")}>Back to Top</span>
      </div>
    )
  }
}



      