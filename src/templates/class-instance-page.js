import React from 'react'
import PropTypes from 'prop-types'
import { ClassInstance } from '../components/training/ClassInstance.js'
import { Container, PageTitle } from '../components/general.styled.js'

const ClassInstancePage = ({ data }) => (
  <Container>
    <PageTitle>{data.markdownRemark.frontmatter.title}</PageTitle>
    <ClassInstance title={data.markdownRemark.frontmatter.title} data={data} />
  </Container>
)

ClassInstancePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ClassInstancePage

export const ClassInstancePageQuery = graphql`
  query ClassInstancePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description        
        schedule {
          day
          time
        }
      }
      html
    }
  }
`
