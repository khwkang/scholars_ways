import React from 'react'
import PropTypes from 'prop-types'
import ClinicAppointment from '../components/clinic/ClinicAppointment.js'

export const ClinicAppointmentPageTemplate = ({ title, data}) => {
  return (
    <section id="clinic_appointment_page" className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-9 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <ClinicAppointment data={data} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

ClinicAppointmentPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string
}

const ClinicAppointmentPage = ({ data }) => {
  const pageData = data.markdownRemark.frontmatter
  return (
    <ClinicAppointmentPageTemplate
      title={pageData.title}
      data={pageData}
    />
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
        secondary_address
      }
    }
  }
`
