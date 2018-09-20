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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
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
