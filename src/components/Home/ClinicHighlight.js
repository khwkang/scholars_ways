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

export const ClinicHighlight = ({image}) => (
  <Container id="clinic_highlight">
    <Columns>
      <ContentWrapper>
        <Content>
          <Title>Acupunture Clinic</Title>
          <Text>
            At Scholars Way Healing Center we believe that good health care
            should be supportive of both Physical and Emotional Well-being. We
            specialize in Acupuncture, Pulse Diagnosis, Moxibustion, Herbal
            Tonics, Qigong, and Lifestyle Consultation to Heal, Nourish, and
            Balance the Body and Mind.
          </Text>
          <Link to="/clinic/appointment">
            <button>Appointment</button>
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
