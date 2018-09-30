import React from 'react'
import {Container, PageTitle} from './Article.styled'
import {HTMLContent} from '../Content'

export const Article = ({ data, content }) => (
  <Container>
    <PageTitle>{data.title}</PageTitle>
    {content && (
      <HTMLContent content={content} />
    )}
  </Container>  
)

export const query = graphql`
  fragment Article on Query {
    markdownRemark(id: { eq: $id }) {
      html     
      frontmatter {
        title
      }       
    }    
  }
`