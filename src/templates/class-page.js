import React from 'react'
import PropTypes from 'prop-types'
import { Container, PageTitle } from '../components/general.styled.js'
import { Classes } from '../components/training/Classes'

const ClassPage = ({ data }) => {
  const { frontmatter: page } = data.markdownRemark
  const title = page.title
  const classes = page.classes
  return (
    <Container>
      <PageTitle>{title}</PageTitle>
      <Classes classes={classes} />
    </Container>
  )
}

export default ClassPage

ClassPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export const ClassPageQuery = graphql`
  query ClassPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        classes {
          title
          link_url
          image_path
          description
          schedule_day
          schedule_time
        }
      }
    }
  }
`
