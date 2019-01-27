import React from "react";
import { StaticQuery, graphql } from "gatsby";
import styled from "react-emotion";
import { Hero } from "./Hero";
import { ClinicHighlight } from "./ClinicHighlight";
import { TrainingHighlight } from "./TrainingHighlight";
import { LibraryHighlight } from "./LibraryHighlight";
import { get } from "lodash";

export const HomePage = () => (
  <StaticQuery
    query={graphql`
      query {
        home_background: file(relativePath: { eq: "mountain_bg.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        home_clinic_highlight: file(
          relativePath: { eq: "home_clinic_highlight.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 900, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        home_training_highlight: file(
          relativePath: { eq: "home_training_highlight.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 900, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        home_library_highlight: file(
          relativePath: { eq: "home_library_highlight.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 900, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={render()}
  />
);

const Container = styled.div`
  position: relative;
  height: 100%;
`;

const render = () => imageQueryData => {
  return (    
    <Container>
      <Hero
        image={get(imageQueryData, "home_background.childImageSharp.fluid")}
      />
      <ClinicHighlight
        image={get(
          imageQueryData,
          "home_clinic_highlight.childImageSharp.fluid"
        )}
      />
      <TrainingHighlight
        image={get(
          imageQueryData,
          "home_training_highlight.childImageSharp.fluid"
        )}
      />      
      <LibraryHighlight
        image={get(
          imageQueryData,
          "home_library_highlight.childImageSharp.fluid"
        )}
      />
    </Container>
  );
};


