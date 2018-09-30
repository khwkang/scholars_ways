import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Toggle } from 'react-powerplug'
import { LibraryChildNav } from './LibraryChildNav'
import { get } from 'lodash'
import {
  Container,
  Panel,
  PanelTabs,
  StyledPanelLink,
  StyledPanelBlockLink,
} from './LibraryNav.styled'

const renderArticleNav = (articles) => (  
  <>
    {articles.map(article =>
      <li>{article.name}</li>
    )}
  </>
)

const renderSectionNav = (sections) => (
  <>
    {sections.map(sub =>                                               
      <>
        <li>{sub.name}</li>                                                        
        {sub.child && renderArticleNav(sub.child)}                                      
      </>
    )} 
  </>   
)
const render = props => queryData => {  
  const Navi = get(queryData, 'markdownRemark.frontmatter.navigation.panel')
  return (
    <Container>
      <Panel>
        <h1>Scholars Way</h1>
        <h2>Library</h2> 
      </Panel>    
      <div>
        {Navi.map(main =>  
          <li>{main.name}</li>                    
        )}
      </div>

      <div>
        {Navi.map(main =>
          renderSectionNav(main.sub_menu)                                  
        )}
      </div>
    </Container>
  )
}

export const LibraryNav = props => (
  <StaticQuery
    query={graphql`
      query {
        markdownRemark(fileAbsolutePath: { eq: "/Users/kangken/dev/scholars_ways/src/data/library_nav.md" }) {          
          frontmatter {          
            navigation {      
              panel {        
                name
                url                
                published
                sub_menu {
                  name
                  url
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
      }
    `}
    render={render(props)}
  />
)