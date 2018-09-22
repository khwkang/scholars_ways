import React from 'react'
import { graphql } from "gatsby"
import { Layout } from '../components/Layout'
import { About } from '../components/About'
import { Contact } from '../components/Contact'
import { get } from 'lodash'

const mapToComponent = {
  'About': About,
  'Contact': Contact
}

const PageTemplate = ({ data }) => {
  const mapTo = get(data, 'markdownRemark.frontmatter.componentKey')
  const ChildComponent = mapToComponent[mapTo]  
  console.log("mapping toxxxddddxx", data)
  return (
    <Layout>      
      <ChildComponent data={get(data, 'markdownRemark.frontmatter')} content={get(data, 'markdownRemark.html')}/>      
    </Layout>
  )
}

export default PageTemplate

export const query = graphql`
  query PageTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        componentKey
      }
    }
    ...About
    ...Contact
  }
`
