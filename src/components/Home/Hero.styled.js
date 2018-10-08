import styled from "react-emotion";
import t from "../../theme";

export const HeroContainer = styled("div")`
  position: relative;
  width: 100%;  
  height: ${t.s(9)};
  ${t.mq.m} {
    height: ${t.s(10)};
  }
  ${t.mq.l} {
    height: ${t.s(11)};
  }
  ${t.mq.x} {
    height: ${t.s(11.7)};
  }
`;

export const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
`;

export const Content = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SVGContainer = styled.div`
  height: ${t.s(4.5)}; 
  width: ${t.s(4.5)};
  margin-top: -${t.s(3)}; 
  ${t.mq.m} {
    margin-top: -${t.s(5)}; 
    height: ${t.s(6)}; 
    width: ${t.s(6)};
  }
  ${t.mq.l} {
    margin-top: -${t.s(7)}; 
    height: ${t.s(6)}; 
    width: ${t.s(6)};
  }
`

export const HeroTitle = styled("div")`
  font-size: 3rem;
  text-transform: uppercase;
  color: white;
  font-family: ${t.ff.serif};
  padding: ${t.s(2)};
  font-size: ${t.f(5)};
  ${t.mq.l} {
    font-size: ${t.f(8.5)};
  }
`;

export const HeroSubTitle = styled("div")`
  color: ${t.c.white};
  font-family: ${t.ff.sans};
  font-size: 2.2rem;
  ${t.mq.l} {
    font-size: 3.5rem;
  }
`;
