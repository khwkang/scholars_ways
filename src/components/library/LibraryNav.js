import React from 'react'
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

export const LibraryNav = data => {
  const panelData = data.data.panel
  const panelBlock = data.data.panel_block

  const checkPublishStatus = (event, published) => {
    !published && event.preventDefault()
  }
  return (
    <Container>
      <Panel>
        <h1>Scholars Way</h1>
        <h2>Library</h2>
      </Panel>
      <PanelTabs>
        {panelData.map(chapter => (
          <StyledPanelLink to={chapter.url} active={chapter.active}>
            {chapter.name}
          </StyledPanelLink>
        ))}
      </PanelTabs>
      <Toggle>   
        {({ on, toggle }) => (
          <div>
            {panelBlock.map(section => (          
              <div>          
              <StyledPanelBlockLink
                to={section.url}
                active={section.active}
                published={section.published}                   
                onClick={(event) => {
                  checkPublishStatus(event, section.published)
                  section.child && toggle()
                }}                   
              >
                {section.name}
              </StyledPanelBlockLink>
              {
                get(section, 'child') && <LibraryChildNav isOpen={on} items={section.child} />
              }
              </div>
            ))}
          </div>
        )}
      </Toggle>
      <StyledPanelBlockLink style={{"color":"red", "fontWeight": "700"}}to="/">Back to Main Site</StyledPanelBlockLink>
    </Container>
  )
}
