import React from 'react'
import { get } from 'lodash'
import { graphql } from "gatsby"
// load all components for mapping to tempalte
import { Layout } from '../components/Layout'
import { About } from '../components/About'
import { Contact } from '../components/Contact'
import { HomePage } from '../components/Home'
import { Practitioner } from '../components/Clinic/Practitioner'
import { Expertise } from '../components/Clinic/Expertise'
import { Appointment } from '../components/Clinic/Appointment'
import { ClassSchedule } from '../components/Class/ClassSchedule'
import { ClassList } from '../components/Class/ClassList'
import { ClassInstance } from '../components/Class/ClassInstance'

const mapToComponent = {
  'About': About,
  'Contact': Contact,
  'HomePage': HomePage,
  'Practitioner': Practitioner,
  'Expertise': Expertise,
  'Appointment': Appointment,
  'ClassSchedule': ClassSchedule,
  'ClassList': ClassList,
  'ClassInstance': ClassInstance
}

const PageTemplate = ({ data }) => {
  const mapTo = get(data, 'markdownRemark.frontmatter.componentKey')
  const ChildComponent = mapToComponent[mapTo]

  return (
    <Layout context='main'>
      <ChildComponent data={get(data, 'markdownRemark.frontmatter')} content={get(data, 'markdownRemark.html')} />
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
    ...Practitioner
    ...Expertise
    ...Appointment
    ...ClassSchedule
    ...ClassList
    ...ClassInstance
  }
`
