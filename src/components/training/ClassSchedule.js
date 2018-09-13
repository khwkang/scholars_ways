import React from 'react'
import {Container} from './ClassSchedule.styled'

export const ClassSchedule = ({classes}) => (
  <Container>
      {classes.map(cls => (
        <div>
          <h2>{cls.name}</h2>
          <p>{cls.day}</p>
          <p>{cls.time}</p>
        </div>
      ))}
      <h3>All classes are held at Still and Moving Center</h3>
      <p>Address:</p> 
      <p>1024 Queen St, Honolulu, HI 96814 </p>
  </Container>
)