import React from 'react'
import LinkTrack from "../LinkTrack.js";

export default class ClassModule extends React.Component {
  render() {
    const cls = this.props.classes
    return (
      <div className="cls_module_container">
        <LinkTrack to={`/class/` + cls.link_url}>
          <div className="cls_module" style={{ backgroundImage: `url(${cls.image_path})`}}>
            <h3 className="cls_title">{cls.title}</h3>        
            <div className="bg_overlay">
            </div>
          </div>
        </LinkTrack>
      </div>
    )
  }
}