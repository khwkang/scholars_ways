import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout";
import { Article } from "../components/Library/Article";
import { get } from "lodash";
const mapToComponent = {
  Article: Article
};

const LibraryTemplate = ({ data, location }) => {
  const mapTo = get(data, "markdownRemark.frontmatter.componentKey");
  const ChildComponent = mapToComponent[mapTo];

  return (
    <Layout location={location} context="library">
      <ChildComponent        
        data={get(data, "markdownRemark.frontmatter")}
        content={get(data, "markdownRemark.html")}
        location={location}        
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
