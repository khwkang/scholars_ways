import React from 'react'
import { graphql } from "gatsby"
import {get} from 'lodash'
import qigong_module from '../../img/qigong_module.jpg'
import stretching_module from '../../img/stretching_module.jpg'
import medmove_module from '../../img/medmove_module.jpg'
import PropTypes from 'prop-types'
import {Link} from 'gatsby'
import {
  Master,
  Container,
  Module,
  Overlay,
  ModuleTitle,
  PageTitle,  
  Content,
} from './ClassList.styled'

const map_images = {
  "qigong_module":qigong_module,
  "stretching_module":stretching_module,
  "medmove_module":medmove_module
}

export const ClassList = ({ data }) => {
  return (
    <Master id="class_page">
      <Container>
      <PageTitle>{get(data, 'title')}</PageTitle>
        <Content>          
            {get(data, 'classes').map(cls => (
              <div>
                <Link to={`/class/` + cls.link_url}>
                  <Module backgroundImageSource={map_images[get(cls, 'image_path')]}>
                    <ModuleTitle>{cls.title}</ModuleTitle>
                    <Overlay />
                  </Module>
                </Link>
              </div>
            ))}
        </Content>
      </Container>
    </Master>
  )
}

ClassList.propTypes = {
  data: PropTypes.object.isRequired,
}

export const query = graphql`
  fragment ClassList on Query {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        classes {
          title
          link_url
          image_path
          description
          schedule_day
          schedule_time
        }
      }
    }
  }
`
