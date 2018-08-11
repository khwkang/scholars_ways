import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'

export const ClassPageTemplate = ({ title, data }) => {
  const classes = data.classes
  console.log("xxxx", classes)
  return (
    <section id="" className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-9 is-offset-1">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
            <div className="section columns">
              {classes.map(cls => (
                <div key={cls.title} 
                     className="cls_module column" 
                     style={{ backgroundImage: `url(${cls.image_path})` }}>
                  <div className="message-body">
                    <h3 className="cls_title">
                      {cls.title}
                    </h3>                
                  </div>
                </div>
              ))}
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
          image_path
          description
          schedule_day
          schedule_time
        }
      }
    }
  }
`
