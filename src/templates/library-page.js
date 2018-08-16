import React from 'react'
import PropTypes from 'prop-types'
import LibraryNav from '../components/library/LibraryNav.js'
import Content, { HTMLContent } from '../components/Content'

export const LibraryPageTemplate = ({ title, navigation, content, contentComponent }) => {
  const LibraryContent = contentComponent || Content
  return (
    <div id="library_page_template">
      <LibraryNav data={navigation} />
      <section id="library_page" className="section section--gradient">
        <div>
          <div className="section">
            <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
            {title}
            </h2>  
              <div className="content">                  
                <LibraryContent content={content}/>
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
