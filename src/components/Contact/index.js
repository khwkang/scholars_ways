import React from "react";
import { graphql } from "gatsby";
import { Container, PageTitle, MapContainer } from "./index.styled";
import { GoogleMapComponent } from './GoogleMap'
import { get } from "lodash";
import { HTMLContent } from "../Content";


export const Contact = ({ data, content }) => {
  return (
  <>
    <Container>
      <PageTitle>{get(data, "title")}</PageTitle>
      {content && <HTMLContent content={content} />}
    </Container>
    <GoogleMapComponent
      isMarkerShown
      containerElement={<MapContainer />}
      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.GATSBY_GOOGLE_API_KEY}&libraries=geometry`}
      loadingElement={<div style={{ height: `100%` }} />}            
      mapElement={<div style={{ height: `100%` }} />}
    />
  </>
);

  }
export const query = graphql`
  fragment Contact on Query {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
