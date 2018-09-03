import React from 'react'

export const Appointment = ({ phone, email, address, secondaryAddress }) => (
  <div>
    <h2>We are currently accepting patient by appointment only - Mahalo</h2>
    <div>
      <h3>Phone</h3>
      <p>{phone}</p>
      <h3>Email</h3>
      <p>{email}</p>
      <h3>Address</h3>
      <h4>Still and Moving Center</h4>
      <p>{address}</p>
    </div>
  </div>
)
