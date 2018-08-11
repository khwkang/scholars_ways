import React from 'react'
import PropTypes from 'prop-types'
import ClassModule from '../components/training/ClassModule.js'

export const ClassPageTemplate = ({ title, data }) => {
  const classes = data.classes
  return (
    <section id="" className="section section--gradient">
      <div className="container">
        <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
          {title}
        </h2>
        <div className="section columns">
          {classes.map(cls => (
            <ClassModule key={cls.title} classes={cls}/>
          ))}
        </div>
      </div>
    </section>
  )
}

ClassPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const ClassPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <ClassPageTemplate
      title={frontmatter.title}
      data={frontmatter}
    />
  )
}

ClassPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ClassPage

export const ClassPageQuery = graphql`
  query ClassPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        classes {
          title
          image_path
          description
          schedule_day
          schedule_time
        }
      }
    }
  }
`
