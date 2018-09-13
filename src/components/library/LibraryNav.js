import React from 'react'
import Link from '../LinkTrack.js'
import { LibraryChildNav } from './LibraryChildNav'
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
  return (
    <Container>
      <Panel>
        <h1>Scholars Way</h1>
        <h2>Library</h2>
      </Panel>
      <PanelTabs>
        {panelData.map(chapter => (
          <StyledPanelLink to={chapter.url} active={chapter.active && true}>
            {chapter.name}
          </StyledPanelLink>
        ))}
      </PanelTabs>
      {panelBlock.map(section => (
        <div>
          <StyledPanelBlockLink
            to={section.url}
            active={section.active ? true : false}
          >
            {section.name}
          </StyledPanelBlockLink>
          {section.child && <LibraryChildNav items={section.child} />}
        </div>
      ))}
      <StyledPanelBlockLink style={{"color":"red", "fontWeight": "700"}}to="/">Back to Main Site</StyledPanelBlockLink>
    </Container>
  )
}
