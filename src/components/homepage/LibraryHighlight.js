import React from 'react'
import Link from 'gatsby-link'
import { 
  Container, 
  Columns, 
  Column, 
  ColumnBG, 
  Content, 
  Title, 
  Text 
} from './Highlight.styled';

export default class LibraryHighlight extends React.Component {
  render() {
    return (
      <Container>
        <Columns>
          <Column>
            <Content>     
              <Title>
                Library
              </Title>       
              <Text>
                The Scholar’s Way library exists as database for information on our perspective and practice of medicinal, martial, and meditative arts (sciences); rooted in traditional wisdom and made accessible for contemporary students.
              </Text>
              <Link to="/library">
                <button className="button is-large">Learn More</button>
              </Link>            
            </Content>
          </Column> 
          <Column className={ColumnBG}/>       
        </Columns>
      </Container>
    )
  }
}