import React from "react";
import { StaticQuery, graphql } from "gatsby";
import classnames from "classnames";
import { Link } from "../Link";
import { Toggle, Value } from "react-powerplug";
import { LibraryChildNav } from "./LibraryChildNav";
import { get } from "lodash";
import { isPathActive } from "../../helper";
import {
  Container,
  Header,
  ChapterContainer,
  ChapterLink,
  ChapterLinkActive,
  SectionContainer,
  StyledPanelBlockLink,  
} from "./LibraryNav.styled";

const checkActive = () => ({ href, location: { pathname } }) => ({
  className: classnames(
    ChapterLink,
    isPathActive(pathname, href) && ChapterLinkActive
  ),
});

const render = props => queryData => {
  const Navi = get(queryData, "markdownRemark.frontmatter.navigation.panel");  
  return (
    <Container>
      <Header>
        <h1>Scholars Way</h1>
        <h2>Library</h2>
      </Header>
      <Value initial={props.location.pathname}>
        {value => (
          <Toggle initial={false}>
            {toggle => (
              <>
                <ChapterContainer>
                  {Navi.map(main => (                    
                    <Link 
                      key={main.name} 
                      to={main.url} 
                      getProps={checkActive()}                                 
                      onClick={() => value.setValue(main.url)} 
                      active={value.value}
                    >
                      {main.name}
                    </Link>                    
                  ))}
                </ChapterContainer> 
                {Navi.map((main, index) => (
                  (value.value).startsWith(main.url) && (
                    <SectionContainer>
                      <LibraryChildNav                         
                        value={value} 
                        sections={main.sub_menu} 
                      />
                    </SectionContainer>          
                  )          
                ))}                                                        
              </>
            )}
          </Toggle>
        )}
      </Value>                    
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
            regex: "/src/data/library_nav.md/"
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
