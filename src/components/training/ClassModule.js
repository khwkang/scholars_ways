import React from 'react'
import Link from 'gatsby-link'

export default class ClassModule extends React.Component {
  render() {
    const cls = this.props.classes
    console.log("ssssss", cls)
    return (
      <div className="cls_module column" style={{ backgroundImage: `url(${cls.image_path})`}}>
         <div className="">
        <h3 className="cls_title">
          {cls.title}
        </h3>                
      </div>
      </div>
    )
  }
}