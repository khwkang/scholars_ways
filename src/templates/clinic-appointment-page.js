import React from 'react'
import PropTypes from 'prop-types'
import {Appointment} from '../components/clinic/Appointment.js'
import {Container, PageTitle} from '../components/general.styled.js'

const ClinicAppointmentPage = ({ data }) => {
  const { frontmatter: page } = data.markdownRemark
  const title = page.title
  const email = page.email
  const phone = page.phone
  const address = page.address
  const secondaryAddress = page.secondaryAddress

  return (
    <Container>
      <PageTitle>
        {title}
      </PageTitle>
      <Appointment 
        email={email}
        phone={phone}  
        address={address}
        secondaryAddress={secondaryAddress}
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
        address
        secondaryAddress
      }
    }
  }
`
