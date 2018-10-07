import styled from "react-emotion";
import t from "../../theme";

export const Container = styled.div`
  padding: ${t.s(1)} ${t.s(1)};
  ${t.mq.l} {
    padding: ${t.s(3)} ${t.s(6)};
  }
`;

export const PageTitle = styled("h1")`
  margin-bottom: 1.4rem;
`;

export const ModuleContainer = styled.div`
  position: relative;
  height: 500px;
  // filter: grayscale(100%);
  transition: filter 200ms ease-in-out;
  margin: ${t.s(2)} 0;
  :hover {
    // filter: grayscale(0%);
  }  
`

export const ImageContainer = styled.div`
  height: 100%;
  width: 100%;  
  .gatsby-image-wrapper {
    height: 100%;
    width: 100%;  
  }
`

export const OverlayContainer = styled.div`
  position: absolute;
  top: 0;  
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    z-index: 2;
    display: block;
    color: white;
    font-family: ${t.ff.sans};
    font-size: ${t.f(8)};    
  }
`

export const Overlay = styled.div`
  background-color: black;
  position: absolute;
  top: 0;  
  width: 100%;
  height: 100%;
  transition: opacity 200ms ease-in-out;
  opacity: 0.3;
  ${ModuleContainer}:hover & {
    opacity: 0;
  }
`