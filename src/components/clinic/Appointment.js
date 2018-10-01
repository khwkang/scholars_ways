import React from "react";
import { Container, PageTitle } from "./Appointment.styled";
export const Appointment = ({ data }) => (
  <Container>
    <PageTitle>{data.title}</PageTitle>
    <h3>By Phone</h3>
    <p>{data.phone}</p>
    <h3>By Email</h3>
    <p>{data.email}</p>
    <h3>Address</h3>
    <h4>Scholars Way</h4>
    <p>{data.primaryAddress}</p>
    <h4>Still and Moving Center</h4>
    <p>{data.secondaryAddress}</p>
    <span>**we currently accept new patients by phone only | Mahalo</span>
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
