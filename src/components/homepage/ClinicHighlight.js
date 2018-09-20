import React from 'react'
import Link from 'gatsby-link'
import library_highlight_bg from '../../img/library_highlight_bg.jpg'
import {
  Container,
  Columns,
  ImageContainer,
  Image,
  Content,
  ContentWrapper,
  Title,
  Text,
} from './Highlight.styled'

export const ClinicHighlight = () => (
  <Container id='clinic_highlight'>
    <Columns>  
      <ContentWrapper>
        <Content>     
          <Title>
            Acupunture Clinic
          </Title>       
          <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
          </Text>
          <Link to="/clinic/expertise">
            <button>Appointment</button>
          </Link>            
        </Content>    
      </ContentWrapper>  
      <ImageContainer>
      <Image src={library_highlight_bg}/>      
      </ImageContainer>
    </Columns>
  </Container>
)
