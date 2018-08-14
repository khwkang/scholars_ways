import React from 'react'
import PropTypes from 'prop-types'
import LibraryNav from '../components/library/LibraryNav.js'
import Content, { HTMLContent } from '../components/Content'

export const LibraryPageTemplate = ({ title, navigation, content, contentComponent }) => {
  const LibraryContent = contentComponent || Content
  return (
    <div className="whatsup columns">
      <LibraryNav data={navigation} />
      <section id="library_page" className="section section--gradient column">
        <div className="container">
          <div className="columns">
            <div className="column is-8 is-offset-2">
              <div className="section">
                <h2 className="title header-title-margin-fix is-size-3 has-text-weight-bold is-bold-light">
                {title}
                </h2>  
                  <div className="content columns">                  
                    <LibraryContent content={content}/>
                  </div>
              </div>
            </div>  
          </div>
        </div>
      </section>
    </div>  
  )
}

LibraryPageTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  navigation: PropTypes.object,
}

const LibraryPage = ({ data }) => {
  const {markdownRemark: chapter} = data
  return (
    <LibraryPageTemplate
      title={chapter.frontmatter.title}  
      navigation={chapter.frontmatter.navigation}
      content={chapter.html}
      contentComponent={HTMLContent}
    />
  )
}

LibraryPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  })
}

export default LibraryPage

export const LibraryPageQuery = graphql`
  query LibraryPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
        navigation {
          panel {
            name
            url
            active
          }
          panel_block {
            name
            url
            active
          }
        }
      }
    }
  }
`
