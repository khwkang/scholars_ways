import React from 'react'
import PropTypes from 'prop-types'
import { Container, PageTitle } from '../components/general.styled.js'
import { About } from '../components/about'

const AboutPage = ({ data }) => {
  const title = data.markdownRemark.frontmatter.title

  return (
    <Container>
      <PageTitle>{title}</PageTitle>
      <About data={data.markdownRemark.frontmatter} />
    </Container>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const AboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        text
      }
    }
  }
`
