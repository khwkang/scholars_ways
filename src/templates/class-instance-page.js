import React from 'react'
import PropTypes from 'prop-types'
import ClassInstance from '../components/training/ClassInstance.js'

export const ClassInstancePageTemplate = ({ title, data }) => {
  return (
    <section
      id={title.toLowerCase().replace(/ /g, '_')}
      className="section section--gradient"
    >
      <div className="container">
        <div className="columns">
          <div className="column is-9 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <div className="content columns">
                <ClassInstance key={data.title} data={data} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

ClassInstancePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.object,
}

const ClassInstancePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <ClassInstancePageTemplate title={frontmatter.title} data={frontmatter} />
  )
}

ClassInstancePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ClassInstancePage

export const ClassInstancePageQuery = graphql`
  query ClassInstancePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
      }
    }
  }
`
