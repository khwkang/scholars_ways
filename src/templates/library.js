import React from 'react'
import { graphql } from "gatsby"
import { Container, PageTitle } from '../components/general.styled.js'
import { About } from '../components/About'
import { Layout } from '../components/Layout'

const LibraryTemplate = ({ data }) => {
  const title = data.markdownRemark.frontmatter.title

  return (
    <Layout>
      <Container>
        <PageTitle>{title}</PageTitle>
        <About data={data.markdownRemark.frontmatter} />
      </Container>
    </Layout>
  )
}

export default LibraryTemplate

export const LibraryTemplateQuery = graphql`
  query LibraryTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        text
      }
    }
  }
`
