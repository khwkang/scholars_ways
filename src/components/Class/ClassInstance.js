import React from "react";
import { get } from "lodash";
import { HTMLContent } from "../Content";
import { Container, PageTitle, Schedule } from "./ClassInstance.styled";
import { Link, graphql } from "gatsby";

export const ClassInstance = ({ data, content }) => (
  <Container>
    <PageTitle>{get(data, "title")}</PageTitle>
    {get(data, "description") && <div>{get(data, "description")}</div>}
    {content && <HTMLContent content={content} />}
    <Schedule>
      <h2>Schedule</h2>
      <p>{get(data, "schedule.day")}</p>
      <p>{get(data, "schedule.time")}</p>
    </Schedule>
    <Link to="/contact">
      <button>sign up</button>
    </Link>
  </Container>
);

export const query = graphql`
  fragment ClassInstance on Query {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        schedule {
          day
          time
        }
      }
      html
    }
  }
`;
