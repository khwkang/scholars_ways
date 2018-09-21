import React from 'react'
import { Container, ChildLink, StyledList } from './LibraryChildNav.styled'

export const LibraryChildNav = ({ isOpen, items }) => (
  <Container isOpen={isOpen}>
    {items.map(item => (
      <StyledList>
        <ChildLink to={item.url}>{item.name}</ChildLink>
      </StyledList>
    ))}
  </Container>
)
