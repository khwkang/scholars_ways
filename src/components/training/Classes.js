import React from 'react'
import {Link} from 'gatsby'
import { get } from 'lodash'
import qigong_module from '../../img/qigong_module.jpg'
import stretching_module from '../../img/stretching_module.jpg'
import medmove_module from '../../img/medmove_module.jpg'
import {
  Master,
  Container,
  Module,
  Overlay,
  ModuleTitle,
} from './Classes.styled'

const map_images = {
  "qigong_module":qigong_module,
  "stretching_module":stretching_module,
  "medmove_module":medmove_module
}

export const Classes = ({ classes }) => (
  <Master id="class_page">
    <Container>
      {classes.map(cls => (
        <div>
          <Link to={`/class/` + cls.link_url}>
            <Module backgroundImageSource={map_images[get(cls, 'image_path')]}>
              <ModuleTitle>{cls.title}</ModuleTitle>
              <Overlay />
            </Module>
          </Link>
        </div>
      ))}
    </Container>
  </Master>
)
