import React from "react";
import { Link } from "gatsby";
import { Image } from '../Image'
import {
  Container,
  Columns,
  ImageContainer,
  ContentWrapper,
  Content,
  Title,
  Text,
} from "./Highlight.styled";

export const TrainingHighlight = ({image}) => (
  <Container id="training_highlight">
    <Columns reverse={true}>
      <ImageContainer>
        <Image 
          fluid={image}
        />
      </ImageContainer>
      <ContentWrapper>
        <Content>
          <Title>Training</Title>
          <Text>
            Personal empowerment is an essential aspect of well-being. Scholar's
            Way provides classes in Qi Gong, Stretching for Rejuvenation,
            Medicinal Movement, and Kendo Basics for people looking to better
            understand their body; how to heal it, strengthen it, and take
            charge of their own well-being.
          </Text>
          <Link to="/class">
            <button>Current Classes</button>
          </Link>
        </Content>
      </ContentWrapper>
    </Columns>
  </Container>
);
