import React from 'react'
import {get} from 'lodash'
import {Container, PageTitle} from './ClassSchedule.styled'

export const ClassSchedule = ({data}) => (
  <Container>        
    <PageTitle>{get(data, 'title')}</PageTitle>
    {get(data, 'classes').map(cls => (
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

export const query = graphql`
  fragment ClassSchedule on Query {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {        
        title
        classes {
          name
          day
          time
        }
      } 
    }    
  }
`