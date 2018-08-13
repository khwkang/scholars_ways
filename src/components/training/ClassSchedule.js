import React from 'react'

export default class ClassSchedule extends React.Component {
  render() {
    const cls = this.props.data
    return (
      <div className="container">
        <div>
          Class schedule in table format
        </div>
      </div>
    )
  }
}