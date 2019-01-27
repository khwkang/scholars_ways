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

export const ClinicHighlight = ({ image }) => (
  <Container id="clinic_highlight">
    <Columns>
      <ContentWrapper>
        <Content>
          <Title>Acupunture Clinic</Title>
          <Text>
            At Scholars Way Healing Arts health care
            is supportive of both Physical and Emotional Well-being. We
            specialize in Acupuncture, Pulse Diagnosis, Moxibustion, Herbal
            Medicine, Physical Trainings, and Lifestyle Consultation to Heal and Nourish.
          </Text>
          <Link to="/clinic/appointment">
            <button>Appointment</button>
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
