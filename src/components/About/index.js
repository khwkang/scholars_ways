import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { get } from "lodash";
import { HTMLContent } from "../Content";
import { Container, PageTitle } from "./index.styled";
import { Image } from "../Image";

export const About = props => (
  <StaticQuery
    query={graphql`
      query {
        group_pic: file(relativePath: { eq: "about_group.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1400, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }                                       
        }
      }
    `}
    render={render(props)}
  />
);

const render = (props) => imageQueryData => {  
  const data = props.data
  const content = props.content
  console.log("alskdhfauehf   ", imageQueryData)
  return (
    <Container>
      <PageTitle>{get(data, "title")}</PageTitle>
      <p>{get(data, "text")}</p>
      {content && <HTMLContent content={content} />}
      <Image 
        fluid={get(imageQueryData, "group_pic.childImageSharp.fluid")}
      />
    </Container>
  );
};

export const query = graphql`
  fragment About on Query {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        text
      }
    }
  }
`;
