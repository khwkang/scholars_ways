import React from 'react'
import Link from '../LinkTrack.js'

const LibraryChildNav = ({ items }) => (
  <ul>
    {items.map(item => (
      <li>
        <Link 
          to={item.url} 
          className={'panel-block-child'}
          >
          {item.name}
        </Link>
     </li>
    ))}
  </ul>
)

export default LibraryChildNav
