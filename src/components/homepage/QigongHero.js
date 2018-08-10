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
              <div className="is-size-5">Qigong is the art of exercising the flow of qi throughout the body’s meridians (energy channels). Qigong combines all the benefits of resistance and stretching exercises. However, unlike other forms of resistance exercises, Scholars Way Qigong stresses the importance of a “push and pull” concept to improve the overall balance of the muscles.</div>
              <Link to="">
                  <button className="button is-large">Learn More</button>
              </Link>
            </div>
          </div>  
          <div className="home_qigong_bg picture_left column">
          </div>
        </div>  
      </div>
    )
  }
}