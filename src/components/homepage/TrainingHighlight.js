import React from 'react'
import Link from 'gatsby-link'
import qigong_highlight_bg from '../../img/qigong_highlight_bg.jpg'
import {
  Container,
  Columns,
  ImageContainer,
  ContentWrapper,
  Content,
  Title,
  Text,
  Image,
} from './Highlight.styled'

export const TrainingHighlight =() => (
  <Container id="training_highlight">
    <Columns reverse={true}>
    <ImageContainer>
      <Image src={qigong_highlight_bg} />          
      </ImageContainer>
      <ContentWrapper>
        <Content>
          <Title>
            Training
          </Title>       
          <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
          </Text>
          <Link to="/library">
            <button>Current Classes</button>
          </Link>  
        </Content>          
      </ContentWrapper>        
    </Columns>
  </Container>
)
 
