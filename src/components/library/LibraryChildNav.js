import React from "react";
import { StyledPanelBlockLink, ChildLink } from "./LibraryChildNav.styled";

const renderArticleNav = articles => (
  <>
    {articles.map(article => (
      <ChildLink key={article.name} to={article.url}>
        {article.name}
      </ChildLink>
    ))}
  </>
);

export const LibraryChildNav = sections => {
  return (
    <>
      {sections.map(sub => (
        <>
          <StyledPanelBlockLink key={sub.name} to={sub.url}>
            {sub.name}
          </StyledPanelBlockLink>
          {sub.child && renderArticleNav(sub.child)}
        </>
      ))}
    </>
  );
};
