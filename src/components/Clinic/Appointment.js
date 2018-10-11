import React from "react";
import { Container, Content, PageTitle, MapContainer } from "./Appointment.styled";
import { GoogleMapComponent } from "./GoogleMap"
export const Appointment = ({ data }) => (
  <Container>
    <Content>
      <PageTitle>{data.title}</PageTitle>
      <h3>By Phone</h3>
      <p>{data.phone}</p>
      <h3>By Email</h3>
      <p>{data.email}</p>
      <h3>Clinic Address</h3>      
      <p>{data.primary_address}</p>
      <span>* For new patients, please call for appointment. Mahalo.</span>
    </Content>
    <GoogleMapComponent 
      isMarkerShown
      containerElement={<MapContainer />}
      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.GATSBY_GOOGLE_API_KEY}&libraries=geometry`}
      loadingElement={<div style={{ height: `100%` }} />}            
      mapElement={<div style={{ height: `100%` }} />}
    /> 
  </Container>
);

export const query = graphql`
  fragment Appointment on Query {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        email
        phone
        primary_address
        secondary_address
      }
    }
  }
`;
