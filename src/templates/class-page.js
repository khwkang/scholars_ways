import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'

export const ClassPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content
  
  return (
    <section id="" className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-9 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
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
  console.log("aaaaaa", frontmatter)
  return (
    <ClassPageTemplate
      contentComponent={HTMLContent}
      title={frontmatter.title}
      content={frontmatter.html}
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
          description
        }
      }
    }
  }
`
