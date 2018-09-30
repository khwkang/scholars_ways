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

const render = props => queryData => {
  console.log("xxxxqd ", queryData)
  const Navi = get(queryData, 'markdownRemark.frontmatter.navigation.panel')
  return (
    <Container>
      <Panel>
        <h1>Scholars Way</h1>
        <h2>Library</h2> 
      </Panel>
      {Navi.map(item =>  
        <li>{item.name}</li>        
      )}
    </Container>
  )
}

export const LibraryNav = props => (
  <StaticQuery
    query={graphql`
      query {
        markdownRemark(id: { eq: "/Users/kangken/dev/scholars_ways/src/data/libraryNav.md absPath of file >>> MarkdownRemark" }) {          
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