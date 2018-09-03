import styled from 'react-emotion'
import { css } from 'emotion'
import t from '../../theme'
import Link from '../LinkTrack.js'

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
  font-size: 1.2em;
  display: block;
  border: none;
  color: white;
  text-transform: uppercase;
`

export const StyledPanelBlockLink = styled(Link)`
  padding: 0.6rem 0 0.6rem 1.5em;
  border: none;
`

export const ChildLink = styled(Link)`
  display: block;
  padding: 10px 0 10px 37px;
  color: #5d5d5d;
`
