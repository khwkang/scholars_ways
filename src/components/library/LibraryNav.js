import React from "react";
import { StaticQuery, graphql } from "gatsby";
import classnames from "classnames";
import { Link } from "gatsby";
import { Toggle } from "react-powerplug";
import { LibraryChildNav } from "./LibraryChildNav";
import { get } from "lodash";
import { isPathActive } from "../../helper";
import {
  Container,
  Header,
  ChapterContainer,
  ChapterLink,
  ChapterLinkActive,
  StyledPanelBlockLink,
  StyledList
} from "./LibraryNav.styled";

const checkActive = () => ({ href, location: { pathname } }) => ({
  className: classnames(
    ChapterLink,
    isPathActive(pathname, href) && ChapterLinkActive
  )
});

const render = props => queryData => {
  const Navi = get(queryData, "markdownRemark.frontmatter.navigation.panel");
  return (
    <Container>
      <Header>
        <h1>Scholars Way</h1>
        <h2>Library</h2>
      </Header>
      <ChapterContainer>
        {Navi.map(main => (
          <Link key={main.name} to={main.url} getProps={checkActive()}>
            {main.name}
          </Link>
        ))}
      </ChapterContainer>
      {Navi.map(main => (
        <LibraryChildNav sections={main.sub_menu} />
      ))}
      <StyledPanelBlockLink style={{ color: "red", fontWeight: "700" }} to="/">
        Back to Main Site
      </StyledPanelBlockLink>
    </Container>
  );
};

export const LibraryNav = props => (
  <StaticQuery
    query={graphql`
      query {
        markdownRemark(
          fileAbsolutePath: {
            eq: "/Users/kangken/dev/scholars_ways/src/data/library_nav.md"
          }
        ) {
          frontmatter {
            navigation {
              panel {
                name
                url
                published
                sub_menu {
                  name
                  url
                  published
                  child {
                    name
                    url
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={render(props)}
  />
);
