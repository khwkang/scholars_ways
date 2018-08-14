import React from 'react'
// import animation from './animation.js'
import Link from '../LinkTrack.js'

export default class LibraryNav extends React.Component {
  constructor(props) {
    super(props)
    const panelData = this.props.data.panel
    const panelBlock = this.props.data.panel_block
  }

  render() {
    return (
      <div id="library_nav" className="column navbar is-fixed-top">
        <nav className="panel">
          <div className="panel-heading">
            <h1 className="panel_title">Scholars Way</h1>
            <h2 className="panel_sub_title">Library</h2>
          </div>
          <p className="panel-tabs">
            {this.props.data.panel.map(chapter => (
              <Link 
                to={chapter.url} 
                className={'category_option ' + (chapter.active ? 'is-active' : '')}
              >
                {chapter.name}
              </Link>
            ))}
          </p>
          {this.props.data.panel_block.map(section => (
              <Link 
                to={section.url} 
                className={'panel-block ' + (section.active ? 'is-active' : '')}
              >
                {section.name}
              </Link>
            ))}          
          <Link to="/" className="panel-block back_button">
            Leave Library
          </Link>
        </nav>
      </div>
    )
  }
}
