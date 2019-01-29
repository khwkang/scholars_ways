import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { get } from "lodash";
import { HTMLContent } from "../Content";
import { Container, PageTitle, ImageContainer } from "./index.styled";
import { Image } from "../Image";

export const About = props => (
  <StaticQuery
    query={graphql`
      query {
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
      <ImageContainer>
        <Image 
          fluid={get(imageQueryData, "home_library_highlight.childImageSharp.fluid")}
        />
      </ImageContainer>
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
