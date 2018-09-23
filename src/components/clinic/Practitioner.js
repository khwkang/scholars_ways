import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import {HTMLContent} from '../Content'
import {Container, PageTitle} from './Practitioner.styled'

export const Practitioner = ({ data, content }) => {
  return (
  <Container>
    <PageTitle>{get(data, 'title')}</PageTitle>
    <p>{get(data, 'text')}</p>
    {
      content && (
        <HTMLContent content={content} />
      )
    }    
  </Container> 
  )
}

export const query = graphql`
  fragment Practitioner on Query {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        componentKey
        title
        text
      } 
    }    
  }
`