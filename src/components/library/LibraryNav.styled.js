import styled from 'react-emotion'
import t from '../../theme'
import {Link} from 'gatsby'

export const Container = styled('div')`
  position: relative;
  height: 100%;
  z-index: 30;
  padding-left: 0;
  border-right: 1px solid #ececec;

  ${t.mq.l} {
    width: 22%;
    position: fixed;
  }
`

export const Panel = styled('div')`
  padding: 21px 0 0 0;
  margin: 0 auto;
  text-align: center;
  font-weight: 700;
  font-size: 1.4rem;
  background-color: #2d2d2d;
  color: #fff;
  border: none;
  h1 {
    font-family: fantasy;
    font-size: 1.8rem;
  }
  h2 {
    margin: 0;
  }
`

export const PanelTabs = styled('div')`
  display: block;
  padding: 1.8rem 0 1.8rem 1em;
  font-size: 0.9em;
  font-weight: 700;
  border: none;
  background-color: #2d2d2d;
`

export const StyledPanelLink = styled(Link)`
  font-size: 1.2rem;
  margin: 10px 0;
  padding-left: 10px;
  display: block;
  border: none;
  color: ${p => p.active ? '#878787' : 'white'};
  text-transform: uppercase;
`


export const StyledPanelBlockLink = styled(Link)`
  padding: 0.8rem 0 0.6rem 1.5em;
  display: inline-block;
  border: none;
  font-size: ${t.f(0)};
  color: ${p => p.published ? 'black' : 'gray'};
  cursor: ${p => p.published ? 'pointer' : 'not-allowed'};
  width: 100%;
  &:hover {
    background-color: #f4f4f4;  
  }
`