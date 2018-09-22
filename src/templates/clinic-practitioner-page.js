import React from 'react'
import { graphql } from "gatsby"
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'
import { Container, PageTitle } from '../components/general.styled.js'

export const ClinicPractitionerPageTemplate = ({
  title,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content
  return (
    <Container>
      <PageTitle>{title}</PageTitle>
      <PageContent content={content} />
    </Container>
  )
}

ClinicPractitionerPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const ClinicPractitionerPage = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <ClinicPractitionerPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  )
}

ClinicPractitionerPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ClinicPractitionerPage

export const ClinicPractitionerPageQuery = graphql`
  query ClinicPractitionerPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
