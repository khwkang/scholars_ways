import React from 'react'
import PropTypes from 'prop-types'
import ClassModule from '../components/training/ClassModule.js'

export const ClassPageTemplate = ({ title, data }) => {
  const classes = data.classes
  return (
    <section id="class_page" className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-9 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
              {title}
              </h2>  
                <div className="content columns">
                  {classes.map(cls => (
                    <ClassModule key={cls.title} classes={cls}/>
                  ))}
                </div>
            </div>
          </div>  
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
