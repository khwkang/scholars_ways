import React from 'react'
import {Container} from './Appointment.styled'
export const Appointment = ({ phone, email, primaryAddress, secondaryAddress }) => (
    <Container>
      <h3>By Phone</h3>
      <p>{phone}</p>
      <h3>By Email</h3>
      <p>{email}</p>
      <h3>Address</h3>
      <h4>Scholars Way</h4>
      <p>{primaryAddress}</p>
      <h4>Still and Moving Center</h4>
      <p>{secondaryAddress}</p>      
      <span>**we currently accept new patients by phone only | Mahalo</span>
    </Container>  
)
