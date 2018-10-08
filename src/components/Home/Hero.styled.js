import styled from "react-emotion";
import { css } from "emotion";
import t from "../../theme";
import { ReactComponent as Logo } from "../../img/sw_logo.svg";

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
`

export const Content = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;  
  justify-content: center;
`;

export const StyledLogoSVG = styled(Logo)`
  width: ${t.s(6)};  
`

export const HeroTitle = styled("div")`
  font-size: 3rem;
  color: white;
  font-family: ${t.ff.sans};
  ${t.mq.l} {
    font-size: 5.5rem;
  }
`;

export const HeroSubTitle = styled("div")`
  color: ${t.c.white};
  font-family: ${t.ff.sans};
  margin-bottom: 15rem;
  font-size: 2.2rem;
  ${t.mq.l} {
    font-size: 3.5rem;
  }
`;
