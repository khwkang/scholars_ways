import React from "react";
import styled from "react-emotion";
import { Hero } from "./Hero";
import { ClinicHighlight } from "./ClinicHighlight";
import { TrainingHighlight } from "./TrainingHighlight";
import { LibraryHighlight } from "./LibraryHighlight";

export const HomePage = () => (
  <Container id="index_page">
    <Hero />
    <ClinicHighlight />
    <TrainingHighlight />
    <LibraryHighlight />
  </Container>
);

export const Container = styled("div")`
  position: absolute;
`;
