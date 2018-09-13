import React from 'react'
import PropTypes from 'prop-types'
import { Appointment } from '../components/clinic/Appointment.js'
import { Container, PageTitle } from '../components/general.styled.js'

const ClinicAppointmentPage = ({ data }) => {
  const { frontmatter: page } = data.markdownRemark

  return (
    <Container>
      <PageTitle>{page.title}</PageTitle>
      <Appointment
        email={page.email}
        phone={page.phone}
        primaryAddress={page.primary_address}
        secondaryAddress={page.secondary_address}
      />
    </Container>
  )
}

ClinicAppointmentPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ClinicAppointmentPage

export const ClinicAppointmentPageQuery = graphql`
  query ClinicAppointmentPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        email
        phone
        primary_address
        secondary_address
      }
    }
  }
`
