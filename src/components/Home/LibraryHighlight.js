import React from "react";
import { Link } from "gatsby";
import { Image } from "../Image";
import {
  Container,
  Columns,
  ImageContainer,
  Content,
  ContentWrapper,
  Title,
  Text
} from "./Highlight.styled";

export const LibraryHighlight = ({ image }) => (
  <Container id="library_highlight">
    <Columns>
      <ContentWrapper>
        <Content>
          <Title>Library</Title>
          <Text>
            The Scholar’s Way library exists as reference on our
            perspective and practice of medicinal, meditative, and movement arts;
            inspired by traditional wisdom and made accessible for contemporary
            students. The library is useful for people who have been
            to our clinic or classes (Kobang Qigong, Medicinal movement, Stretching for Rejuvenation, 
            Kendo for Health, and Meditation) as well as those interested in
            better understanding healing and self-evolution.
          </Text>
          <Link to="/library/start-here">
            <button>Enter library</button>
          </Link>
        </Content>
      </ContentWrapper>
      <ImageContainer>
        <Image 
          fluid={image} 
          fadeIn={false}
        />
      </ImageContainer>
    </Columns>
  </Container>
);
