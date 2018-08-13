import React from 'react'

export default class ClassQigong extends React.Component {
  render() {
    const cls = this.props.data
    return (
      <div className="container">
        <div>
          {cls.description}
        </div>
      </div>
    )
  }
}