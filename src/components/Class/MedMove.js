import React from "react";
import { get, forOwn } from "lodash";
import { HTMLContent } from "../Content";
import { Image } from "../Image";
import { Container, PageTitle, Schedule } from "./ClassInstance.styled";
import { StaticQuery, Link, graphql } from "gatsby";
import {Carousel} from '../Carousel'

export const medMoveImage = graphql`
  fragment medMoveImage on File {
    childImageSharp {
      fluid(maxWidth: 1500, quality: 90) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
`;

export const MedMove = props => (
  <StaticQuery
    query={graphql`
      query {
        medmove1: file(
          relativePath: { eq: "class/medmove/class_medmove1.jpg" }) {
            ...medMoveImage
        }
        medmove2: file(
          relativePath: { eq: "class/medmove/class_medmove2.jpg" }
        ) {
          ...medMoveImage
        }
        medmove3: file(
          relativePath: { eq: "class/medmove/class_medmove3.jpg" }
        ) {
          ...medMoveImage
        }
        medmove4: file(
          relativePath: { eq: "class/medmove/class_medmove4.jpg" }
        ) {
          ...medMoveImage
        }
        medmove5: file(
          relativePath: { eq: "class/medmove/class_medmove5.jpg" }
        ) {
          ...medMoveImage
        }              
      }
    `}
    render={render(props)}
  />
);

const render = (props) => imageQueryData => {  
  const data = props.data
  const content = props.content
  const images = []
  forOwn(imageQueryData, (image) => {
    images.push(get(image, "childImageSharp.fluid")) 
  })  

  return (
    <Container>
      <PageTitle>{get(data, "title")}</PageTitle>
      {get(data, "description") && <div>{get(data, "description")}</div>}
      {content && <HTMLContent content={content} />}
      <Carousel>
        {images.map((img, index) => (        
          <Image
            key={"medmoveclass" + index}
            fluid={img}
            fadeIn={false}
          />        
        ))}
      </Carousel>
      <Schedule>
        <h2>Schedule</h2>
        <p>{get(data, "schedule.day")}</p>
        <p>{get(data, "schedule.time")}</p>
      </Schedule>      
      <Link to="/contact">
        <button>sign up</button>
      </Link>
    </Container>
  )
}

export const query = graphql`
  fragment MedMove on Query {
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
