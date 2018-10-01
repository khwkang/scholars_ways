import React from "react";
import { graphql } from "gatsby";
import { Container, PageTitle } from "../components/general.styled.js";
import { About } from "../components/About";
import { Layout } from "../components/Layout";
import { Article } from "../components/Library/Article";
import { get } from "lodash";
const mapToComponent = {
  Article: Article
};

const LibraryTemplate = ({ data }) => {
  const mapTo = get(data, "markdownRemark.frontmatter.componentKey");
  const ChildComponent = mapToComponent[mapTo];

  return (
    <Layout context="library">
      <ChildComponent
        data={get(data, "markdownRemark.frontmatter")}
        content={get(data, "markdownRemark.html")}
      />
    </Layout>
  );
};
export default LibraryTemplate;

export const LibraryTemplateQuery = graphql`
  query LibraryTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        componentKey
      }
    }
    ...Article
  }
`;
