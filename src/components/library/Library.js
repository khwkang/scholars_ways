import React from 'react'

export default class Library extends React.Component {
  render() {
    const cls = this.props.data
    return (
      <div className="library_component container">
        <div className="description_content">
          {cls.description}
        </div>
      </div>
    )
  }
}