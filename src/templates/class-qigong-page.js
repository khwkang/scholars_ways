import React from 'react'
import PropTypes from 'prop-types'
import ClassQigong from '../components/training/ClassQigong.js'

export const ClassQigongPageTemplate = ({ title, data }) => {
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
                  <ClassQigong key={data.title} data={data}/>
                </div>
            </div>
          </div>  
        </div>
      </div>
    </section>
  )
}

ClassQigongPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const ClassQigongPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <ClassQigongPageTemplate
      title={frontmatter.title}
      data={frontmatter}
    />
  )
}

ClassQigongPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ClassQigongPage

export const ClassQigongPageQuery = graphql`
  query ClassQigongPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
      }
    }
  }
`
