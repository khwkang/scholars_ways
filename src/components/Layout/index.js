import React from "react";
import Helmet from "react-helmet";
import { Container, Content } from "./index.styled";
import { Mobile } from "../navigation/Mobile";
import { Navbar } from "../navigation/Navbar";
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
    font-family: 'Karla', sans-serif;
    line-height: 30px;
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
  }
`;

export const Layout = ({ context, children }) => (
  <Container>
    <Helmet title="Scholars Ways | Daoist Art of Cultivation" />
    {context === "main" && (
      <>
        <Mobile />
        <Navbar />
      </>
    )}
    {context === "library" && (
      <>
        <LibraryNav />
      </>
    )}
    <Content>{children}</Content>
  </Container>
);
