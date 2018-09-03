import React from 'react'

export default class ClassInstance extends React.Component {
  render() {
    const cls = this.props.data
    return (
      <div className="container">
        <div>{cls.description}</div>
      </div>
    )
  }
}
