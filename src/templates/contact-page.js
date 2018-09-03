import React from 'react'
import PropTypes from 'prop-types'
import Contact from '../components/Contact.js'

export const ContactPageTemplate = ({ title, data }) => {
  return (
    <section id="class_schedule_page" className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-9 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <div className="content columns">
                <Contact key={data.title} data={data} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

ContactPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.object,
}

const ContactPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return <ContactPageTemplate title={frontmatter.title} data={frontmatter} />
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
