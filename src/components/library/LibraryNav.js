import React from 'react'
// import animation from './animation.js'
import Link from '../LinkTrack.js'
import LibraryChildNav from './LibraryChildNav.js'

export default class LibraryNav extends React.Component {
  constructor(props) {
    super(props)
    this.panelData = props.data.panel
    this.panelBlock = props.data.panel_block
  }

  render() {
    return (
      <div id="library_nav" className="navbar">
        <nav className="panel">
          <div className="panel-heading">
            <h1 className="panel_title">Scholars Way</h1>
            <h2 className="panel_sub_title">Library</h2>
          </div>
          <p className="panel-tabs">
            {this.panelData.map(chapter => (
              <Link 
                to={chapter.url} 
                className={'category_option ' + (chapter.active ? 'is-active' : '')}
              >
                {chapter.name}
              </Link>
            ))}
          </p>
          {this.panelBlock.map(section => (
              <div>
              <Link 
                to={section.url} 
                className={'panel-block ' + (section.active ? 'is-active' : '')}
              >
                {section.name}    
              </Link>
              {section.child && <LibraryChildNav items={section.child}/> }                
              </div>
          ))}          
          <Link to="/" className="panel-block back_button">
            Leave Library
          </Link>
        </nav>
      </div>
    )
  }
}