import React from "react";

export const Meditation = props => {
  return (
    <h1>hello meditation</h1>
  )
}

export const query = graphql`
  fragment Meditation on Query {
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
