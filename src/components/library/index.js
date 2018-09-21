import React from 'react'
import { Container, Content, Title } from '../library/index.styled'

export const LibraryContent = ({ title, content }) => (
  <Container>
    <Title>{title}</Title>
    <Content content={content} />
  </Container>
)
