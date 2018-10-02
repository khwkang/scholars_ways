import React from "react";
import { Link } from "../Link";
import classnames from "classnames";
import { isPathActive } from "../../helper";
import { 
  StyledPanelBlockLink, 
  ChildLink,
  ActiveSectionLink 
} from "./LibraryChildNav.styled";

const renderArticleNav = articles => (
  <>
    {articles.map(article => (
      <ChildLink 
        key={article.name} 
        to={article.url}
      >
        {article.name}
      </ChildLink>
    ))}
  </>
);

const checkActive = () => ({ href, location: { pathname } }) => ({
  className: classnames(
    StyledPanelBlockLink,
    isPathActive(pathname, href) && ActiveSectionLink
  )
});

export const LibraryChildNav = ({value, sections}) => {
  return (
    <>
      {sections.map(sub => (
        <>
          <Link 
            key={sub.name} 
            to={sub.url}
            getProps={checkActive()}            
          >
            {sub.name}
          </Link>
          {sub.child && renderArticleNav(sub.child)}
        </>
      ))}
    </>
  );
};
