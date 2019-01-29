import React from "react";
import { get } from "lodash";
import { graphql } from "gatsby";
// load all components for mapping to tempalte
import { Layout } from "../components/Layout";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { HomePage } from "../components/Home";
import { Practitioner } from "../components/Clinic/Practitioner";
import { Expertise } from "../components/Clinic/Expertise";
import { Appointment } from "../components/Clinic/Appointment";
import { ClassSchedule } from "../components/Class/ClassSchedule";
import { ClassList } from "../components/Class/ClassList";
import { Kendo } from "../components/Class/Kendo";
import { Qigong } from "../components/Class/Qigong";
import { MedMove } from "../components/Class/MedMove";
import { ClassInstance } from "../components/Class/ClassInstance";
import { Meditation } from "../components/Class/Meditation"

const mapToComponent = {
  About: About,
  Contact: Contact,
  HomePage: HomePage,
  Practitioner: Practitioner,
  Expertise: Expertise,
  Appointment: Appointment,
  ClassSchedule: ClassSchedule,
  ClassList: ClassList,
  ClassInstance: ClassInstance,
  Kendo: Kendo,
  Qigong: Qigong,
  MedMove: MedMove,
  Meditation: Meditation, 
};

const PageTemplate = ({ data, location }) => {
  const mapTo = get(data, "markdownRemark.frontmatter.componentKey");
  const ChildComponent = mapToComponent[mapTo];

  return (
    <Layout location={location} context="main">
      <ChildComponent
        data={get(data, "markdownRemark.frontmatter")}
        content={get(data, "markdownRemark.html")}
        location={location}
        rootData={data}
      />
    </Layout>
  );
};

export default PageTemplate;

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
    ...Kendo
    ...Qigong
    ...MedMove
    ...Meditation
  }
`;
