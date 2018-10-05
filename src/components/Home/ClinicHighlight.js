import React from "react";
import { Link } from "gatsby";
import library_highlight_bg from "../../img/library_highlight_bg.jpg";
import {
  Container,
  Columns,
  ImageContainer,
  Image,
  Content,
  ContentWrapper,
  Title,
  Text
} from "./Highlight.styled";

export const ClinicHighlight = () => (
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
        <Image src={library_highlight_bg} />
      </ImageContainer>
    </Columns>
  </Container>
);
