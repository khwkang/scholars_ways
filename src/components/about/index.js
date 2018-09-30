import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import {HTMLContent} from '../Content'
import {Container, PageTitle} from './index.styled'

export const About = ({ data, content }) => {
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
  fragment About on Query {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {        
        title
        text
      } 
    }    
  }
`