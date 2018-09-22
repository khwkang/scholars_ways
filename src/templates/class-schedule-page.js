import React from 'react'
import { graphql } from "gatsby"
import PropTypes from 'prop-types'
import {ClassSchedule} from '../components/training/ClassSchedule.js'
import { Container, PageTitle } from '../components/general.styled.js'

const ClassSchedulePage = ({ data }) => {
  const { frontmatter: page } = data.markdownRemark
  return (
    <Container>
      <PageTitle>{page.title}</PageTitle>
      <ClassSchedule
        title={page.title}      
        classes={page.classes}
      />
    </Container>
  )
}

ClassSchedulePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ClassSchedulePage

export const ClassSchedulePageQuery = graphql`
  query ClassSchedulePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
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
