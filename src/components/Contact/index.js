import React from "react";
import { graphql } from "gatsby";
import { Container, PageTitle } from "./index.styled";
import { get } from "lodash";
import { HTMLContent } from "../Content";

export const Contact = ({ data, content }) => (
  <Container>
    <PageTitle>{get(data, "title")}</PageTitle>
    {content && <HTMLContent content={content} />}
  </Container>
);

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
