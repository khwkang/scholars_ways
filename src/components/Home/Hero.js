import React from "react";

import { Image } from "../Image";
import {
  HeroContainer,
  Content,
  ImageContainer,
  HeroTitle,
  HeroSubTitle,
  StyledLogoSVG
} from "./Hero.styled";

export const Hero = ({ image }) => (
  <HeroContainer>
    <ImageContainer>
      <Image fluid={image} fadeIn={false} />
    </ImageContainer>
    <Content>
      <StyledLogoSVG />
      <HeroTitle>Scholars Way</HeroTitle>
      <HeroSubTitle>Healing Arts</HeroSubTitle>
    </Content>
  </HeroContainer>
);
