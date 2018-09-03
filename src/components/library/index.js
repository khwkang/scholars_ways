import React from 'react'
import { Container, Content, Title } from '../library/index.styled'
import RawContent, { HTMLContent } from '../../components/Content'

export const LibraryContent = ({ title, content }) => {
  const LibraryContent = HTMLContent || RawContent
  return (
    <Container>
      <Content>
        <Title>{title}</Title>
        <LibraryContent content={content} />
      </Content>
    </Container>
  )
}
