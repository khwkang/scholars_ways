import React from 'react'
import Link from '../LinkTrack'
import {
  Master,
  Container,
  Module,
  Overlay,
  ModuleTitle,
} from './Classes.styled'

export const Classes = ({ classes }) => (
  <Master id="class_page">
    <Container>
      {classes.map(cls => (
        <div>
          <Link to={`/class/` + cls.link_url}>
            <Module>
              <ModuleTitle>{cls.title}</ModuleTitle>
              <Overlay />
            </Module>
          </Link>
        </div>
      ))}
    </Container>
  </Master>
)
