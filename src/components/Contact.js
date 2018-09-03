import React from 'react'

export default class Contact extends React.Component {
  render() {
    const data = this.props.data
    return (
      <div className="container">
        <div>{data.description}</div>
      </div>
    )
  }
}
