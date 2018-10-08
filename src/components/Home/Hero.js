import React from "react";
import { Image } from "../Image";
import {
  HeroContainer,
  Content,
  ImageContainer,
  HeroTitle,
  HeroSubTitle,
  SVGContainer,
} from "./Hero.styled";
import { ReactComponent as Logo } from "../../img/sw_logo.svg";

export const Hero = ({ image }) => (
  <HeroContainer>
    <ImageContainer>
      <Image fluid={image} fadeIn={false} />
    </ImageContainer>
    <Content>
      <SVGContainer>
        <Logo />
      </SVGContainer>
      <HeroTitle>Scholars Way</HeroTitle>
      <HeroSubTitle>Healing Arts</HeroSubTitle>
    </Content>
  </HeroContainer>
);
