import React from 'react'

export default class ClinicAppointment extends React.Component {
  render() {
    const pageData = this.props.data
    return (
      <div className="container">
        <h2 className="notice">We are currently accepting patient by appointment only - Mahalo</h2>
        <div className="contact_info">
          <h3 className="contact_info_type">Phone</h3>
          <p>{pageData.phone}</p>
          <h3 className="contact_info_type">Email</h3>
          <p>{pageData.address}</p> 
          <h3 className="contact_info_type">Address</h3>
          <h4>Still and Moving Center</h4>
          <p>{pageData.email}</p> 
        </div>
      </div>
    )
  }
}