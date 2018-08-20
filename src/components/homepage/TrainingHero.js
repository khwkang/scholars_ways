import React from 'react'
import Link from 'gatsby-link'

export default class TrainingHero extends React.Component {
  render() {
    return (
      <div id="training_hero">       
        <div className="columns">
          <div className="column">
            <div className="content">
              <h1 className="home_header is-size-1-desktop is-size-2-touch">Training</h1>
              <div className="is-size-5">Qigong is the art of exercising the flow of qi throughout the body’s meridians (energy channels). Qigong combines all the benefits of resistance and stretching exercises. However, unlike other forms of resistance exercises, Scholars Way Qigong stresses the importance of a “push and pull” concept to improve the overall balance of the muscles.</div>
              <Link to="/class">
                  <button className="button is-large">Learn More</button>
              </Link>
            </div>
          </div>  
          <div className="home_training_bg picture_left column">
          </div>
        </div>  
      </div>
    )
  }
}