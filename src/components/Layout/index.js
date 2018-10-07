import React from "react";
import Helmet from "react-helmet";
import { Container, Content, LibraryContent } from "./index.styled";
import { Mobile } from "../Navigation/Mobile";
import { Navbar } from "../Navigation/Navbar";
import { LibraryNav } from "../Library/LibraryNav.js";
import { injectGlobal } from "emotion";
import "modern-normalize";
import t from "../../theme";

injectGlobal`  
  @import url('https://fonts.googleapis.com/css?family=Karla|Nanum+Myeongjo:700,800|Work+Sans:400,600');
  * {
    box-sizing: border-box;
  }
 
  html {
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
  }

  body {
    overflow-x: hidden;
    margin: 0;
    padding: 0;    
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  p {
    color: ${t.c.bodygray};
    font-size: ${t.f(1)};
    font-family: ${t.ff.sans};
    line-height: ${t.s(1.6)};
  }

  h1 {
    font-family: 'Nanum Myeongjo', sans-serif;
    font-weight: 800;
    font-size: ${t.f(5)};
  }
  h2 {
    font-size: ${t.f(2)};
    font-weight: 700;
  }

  button {
    padding: 1rem 1.5rem;
    font-size: 1rem;
    border-radius: 0.3rem;
    background-color: ${t.c.nav};
    color: white;
    font-weight: 700;
    border: none;
    text-transform: uppercase;
    letter-spacing: 2px;
    cursor: pointer;
  }
`;

export const Layout = ({ location, context, children }) => (
  <Container>
    <Helmet title="Scholars Ways | Daoist Art of Cultivation" />
    {context === "main" && (
      <>
        <Mobile location={location} />
        <Navbar location={location} />
      </>
    )}
    {context === "library" && (<LibraryNav location={location}/>)}
    {context === "main" && <Content>{children}</Content>}
    {context === "library" && <LibraryContent>{children}</LibraryContent>}    
  </Container>
);
