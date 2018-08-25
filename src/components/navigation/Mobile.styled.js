import styled from 'react-emotion'
import t from '../../theme'

export const Container = styled('div')`
  background: ${t.c.maroon};
`

export const HamburgerMenuContainer = styled('div')`
  cursor: pointer;
  position: absolute;
  z-index: 30;
  right: 1.5rem;
  top: 1.5rem;
  ${t.mq.l} {
    display: none;
  }
`
export const TopBar = styled('div')`
  color: ${t.c.white};
  postition: fixed;
  top: 0;
  ${t.mq.l} {
    display: none;
  }
`

export const TopBarLogo = styled('img')`
  max-height: 70px;
  padding: 10px;
`

export const TopBarText = styled('p')`
  display: inline-block;
  font-size: 1.5rem;
  position: absolute;
  top: 20px;
`
export const MobileNavContainer = styled('div')`
  padding-left: ${t.s(2)};
  background: #2a2828;
  padding-bottom: 30px;
  display: ${p => p.isOpen ? 'block' : 'none'};
`