import React from "react";
import { Link } from "gatsby";
import { Image } from "../Image";
import {
  Container,
  Columns,
  ImageContainer,
  ContentWrapper,
  Content,
  Title,
  Text
} from "./Highlight.styled";

export const TrainingHighlight = ({ image }) => (
  <Container id="training_highlight">
    <Columns reverse={true}>
      <ImageContainer>
        <Image 
          fluid={image} 
          fadeIn={false}
        />
      </ImageContainer>
      <ContentWrapper>
        <Content>
          <Title>Training</Title>
          <Text>
            Personal empowerment is an essential aspect of well-being. Scholar's
            Way provides classes in Qi Gong KoBang (Old Way), Stretching for Rejuvenation,
            Medicinal Movement, and Kendo for Health for people looking to better
            understand one's body; how to heal, strengthen, and take
            charge of one's own well-being. BE YOUR OWN HEALER. 
          </Text>
          <Link to="/class">
            <button>Current Classes</button>
          </Link>
        </Content>
      </ContentWrapper>
    </Columns>
  </Container>
);
