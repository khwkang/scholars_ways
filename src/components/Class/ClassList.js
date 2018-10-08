import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { get } from "lodash";
import { Image } from "../Image";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import {
  Container,
  ModuleContainer,
  PageTitle,
  OverlayContainer,
  Overlay,
  ImageContainer
} from "./ClassList.styled";

export const ClassList = props => (
  <StaticQuery
    query={graphql`
      query {
        module_qigong: file(relativePath: { eq: "module_qigong.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        module_medicinal_movement: file(
          relativePath: { eq: "module_medicinal_movement.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        module_kendo: file(relativePath: { eq: "module_kendo.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={render(props)}
  />
);

const render = props => imageQueryData => {
  const data = props.data;
  const mappedImage = {
    module_qigong: get(imageQueryData, "module_qigong.childImageSharp.fluid"),
    module_medicinal_movement: get(
      imageQueryData,
      "module_medicinal_movement.childImageSharp.fluid"
    ),
    module_kendo: get(imageQueryData, "module_kendo.childImageSharp.fluid"),
    module_stretching: get(
      imageQueryData,
      "module_medicinal_movement.childImageSharp.fluid"
    )
  };

  return (
    <Container>
      <PageTitle>{get(data, "title")}</PageTitle>
      {get(data, "classes").map(cls => (
        <React.Fragment key={cls.title}>
          {cls.image_path && (
            <Link to={cls.link_url}>
              <ModuleContainer>
                <ImageContainer>
                  <Image
                    alt={"hello world"}
                    fluid={mappedImage[cls.image_path]}
                    fadeIn={false}
                  />
                </ImageContainer>
                <OverlayContainer>
                  <h1>{cls.title}</h1>
                </OverlayContainer>
                <Overlay />
              </ModuleContainer>
            </Link>
          )}
        </React.Fragment>
      ))}
    </Container>
  );
};

ClassList.propTypes = {
  data: PropTypes.object.isRequired
};

export const query = graphql`
  fragment ClassList on Query {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        classes {
          title
          link_url
          image_path
        }
      }
    }
  }
`;
