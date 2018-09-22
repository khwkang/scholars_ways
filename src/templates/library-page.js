import React from 'react'
import { graphql } from "gatsby"
import PropTypes from 'prop-types'
import { LibraryNav } from '../components/library/LibraryNav.js'
import { LibraryContent } from '../components/library/index.js'
import { Template } from '../components/library/index.styled.js'

const LibraryPage = ({ data }) => {
  const { markdownRemark: chapter } = data
  return (
    <Template>
      <LibraryNav data={chapter.frontmatter.navigation} />
      <LibraryContent
        title={chapter.frontmatter.title}
        content={chapter.html}
      />
    </Template>
  )
}

LibraryPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
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
            published
          }
          panel_block {
            name
            url
            active
            published
            child {
              name
              url
            }
          }
        }
      }
    }
  }
`
