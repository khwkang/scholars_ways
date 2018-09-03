import React from 'react'
import Link from 'gatsby-link'
import library_highlight_bg from '../../img/library_highlight_bg.jpg'
import {
  Container,
  Columns,
  Column,
  ColumnBG,
  Content,
  Title,
  Text,
} from './Highlight.styled'

export default class LibraryHighlight extends React.Component {
  render() {
    return (
      <Container id="library_highlight">
        <Columns>
          <Column>
            <Content>
              <Title>Library</Title>
              <Text>
                The Scholar’s Way library exists as database for information on
                our perspective and practice of medicinal, martial, and
                meditative arts (sciences); rooted in traditional wisdom and
                made accessible for contemporary students.
              </Text>
              <Link to="/library">
                <button>Enter library</button>
              </Link>
            </Content>
          </Column>
          <Column bg={library_highlight_bg} className={ColumnBG} />
        </Columns>
      </Container>
    )
  }
}
