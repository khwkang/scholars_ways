import React from 'react'
import Link from '../LinkTrack.js'
import { ChildLink } from './LibraryNav.styled'

const LibraryChildNav = ({ items }) => (
  <ul>
    {items.map(item => (
      <li>
        <ChildLink to={item.url}>{item.name}</ChildLink>
      </li>
    ))}
  </ul>
)

export default LibraryChildNav
