import styled from 'react-emotion'
import {Link} from 'gatsby'

export const Container = styled('ul')`
  display: ${p => p.isOpen ? 'none': 'inline-block'};
`
export const ChildLink = styled(Link)`
  display: block;
  padding: 0px 0 20px 0px;
  color: black;
`
export const StyledList = styled('li')`
  list-style: none;
`

