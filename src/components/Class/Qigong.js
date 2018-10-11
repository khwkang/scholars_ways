import React from "react";
import { get, forOwn } from "lodash";
import { HTMLContent } from "../Content";
import { Image } from "../Image";
import { Container, PageTitle, Schedule } from "./ClassInstance.styled";
import { StaticQuery, Link } from "gatsby";
import {Carousel} from '../Carousel'

export const fluidImage = graphql`
  fragment qigongFluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1500, quality: 90) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
`;

export const Qigong = props => (
  <StaticQuery
    query={graphql`
      query {
        qigong1: file(
          relativePath: { eq: "class/qigong/class_qigong1.jpg" }) {
            ...qigongFluidImage
        }
        qigong2: file(
          relativePath: { eq: "class/qigong/class_qigong2.jpg" }
        ) {
          ...qigongFluidImage
        }
        qigong3: file(
          relativePath: { eq: "class/qigong/class_qigong3.jpg" }
        ) {
          ...qigongFluidImage
        }
        qigong4: file(
          relativePath: { eq: "class/qigong/class_qigong4.jpg" }
        ) {
          ...qigongFluidImage
        }
        qigong5: file(
          relativePath: { eq: "class/qigong/class_qigong5.jpg" }
        ) {
          ...qigongFluidImage
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
            key={"qigongclass" + index}
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
  fragment Qigong on Query {
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
