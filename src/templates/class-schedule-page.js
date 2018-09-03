import React from 'react'
import PropTypes from 'prop-types'
import ClassSchedule from '../components/training/ClassSchedule.js'

export const ClassSchedulePageTemplate = ({ title, data }) => {
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
                <ClassSchedule key={data.title} data={data} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

ClassSchedulePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.object,
}

const ClassSchedulePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <ClassSchedulePageTemplate title={frontmatter.title} data={frontmatter} />
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
      }
    }
  }
`
