import React from 'react'
import { ChildLink, StyledList } from './LibraryChildNav.styled'

export const LibraryChildNav = ({ items }) => (
  <ul>
    {items.map(item => (
      <StyledList>
        <ChildLink to={item.url}>{item.name}</ChildLink>
      </StyledList>
    ))}
  </ul>
)
