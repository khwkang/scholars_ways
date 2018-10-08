import React from "react";
import { get, forOwn } from "lodash";
import { HTMLContent } from "../Content";
import { Image } from "../Image";
import { Container, PageTitle, Schedule } from "./ClassInstance.styled";
import { StaticQuery, Link } from "gatsby";
import {Carousel} from '../Carousel'

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1500, quality: 90) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const Kendo = props => (
  <StaticQuery
    query={graphql`
      query {
        kendo1: file(
          relativePath: { eq: "class/kendo/class_kendo1.jpg" }) {
            ...fluidImage
        }
        kendo2: file(
          relativePath: { eq: "class/kendo/class_kendo2.jpg" }
        ) {
          ...fluidImage
        }
        kendo3: file(
          relativePath: { eq: "class/kendo/class_kendo3.jpg" }
        ) {
          ...fluidImage
        }
        kendo4: file(
          relativePath: { eq: "class/kendo/class_kendo4.jpg" }
        ) {
          ...fluidImage
        }
        kendo5: file(
          relativePath: { eq: "class/kendo/class_kendo5.jpg" }
        ) {
          ...fluidImage
        }
        kendo6: file(
          relativePath: { eq: "class/kendo/class_kendo6.jpg" }
        ) {
          ...fluidImage
        }
        kendo7: file(
          relativePath: { eq: "class/kendo/class_kendo7.jpg" }
        ) {
          ...fluidImage
        }
        kendo8: file(
          relativePath: { eq: "class/kendo/class_kendo8.jpg" }
        ) {
          ...fluidImage
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
            key={"kendoclass" + index}
            fluid={img}
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
  fragment Kendo on Query {
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
