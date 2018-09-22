import React from 'react'
import { graphql } from "gatsby"
import PropTypes from 'prop-types'
import {Contact} from '../components/Contact.js'
import { Container, PageTitle } from '../components/general.styled.js'

const ContactPage = ({ data }) => {
  const { frontmatter: page } = data.markdownRemark
  return (
    <Container>
      <PageTitle>{page.title}</PageTitle>
      <Contact
        title={page.title}              
      />
    </Container>
  )
}

ContactPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ContactPage

export const ContactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`
