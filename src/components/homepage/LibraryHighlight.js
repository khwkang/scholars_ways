import React from 'react'
import Link from 'gatsby-link'
import library_highlight_bg from '../../img/library_highlight_bg.jpg'
import {
  Container,
  Columns,  
  Image,
  ImageContainer,
  Content,
  ContentWrapper,
  Title,
  Text,
} from './Highlight.styled'

export const LibraryHighlight =() => (
  <Container id="library_highlight">
    <Columns>      
      <ContentWrapper>
        <Content>     
          <Title>
            Library
          </Title>       
          <Text>
          The Scholar’s Way library exists as database for information on our perspective and practice of medicinal, martial, and meditative arts; rooted in traditional wisdom and made accessible for contemporary students. The library serves as a reference for people who have been to our classes or clinic, as well as those simply interested in better understanding the process of healing and self-development.
          </Text>
          <Link to="/library">
            <button>Enter library</button>
          </Link>            
        </Content>      
      </ContentWrapper>
      <ImageContainer>
      <Image src={library_highlight_bg}/>       
      </ImageContainer>
    </Columns>
  </Container>
)
