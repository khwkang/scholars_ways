import React from "react";
import { Link } from "gatsby";
import { Image } from '../Image'
import {
  Container,
  Columns,  
  ImageContainer,
  Content,
  ContentWrapper,
  Title,
  Text
} from "./Highlight.styled";

export const LibraryHighlight = ({image}) => (
  <Container id="library_highlight">
    <Columns>
      <ContentWrapper>
        <Content>
          <Title>Library</Title>
          <Text>
            The Scholar’s Way library exists as database for information on our
            perspective and practice of medicinal, martial, and meditative arts;
            rooted in traditional wisdom and made accessible for contemporary
            students. The library serves as a reference for people who have been
            to our classes or clinic, as well as those simply interested in
            better understanding the process of healing and self-development.
          </Text>
          <Link to="/library/start-here">
            <button>Enter library</button>
          </Link>
        </Content>
      </ContentWrapper>
      <ImageContainer>
        <Image 
          fluid={image} 
        />
      </ImageContainer>
    </Columns>
  </Container>
);
