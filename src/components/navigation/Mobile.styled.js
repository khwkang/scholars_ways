import styled from 'react-emotion'
import t from '../../theme'

export const Container = styled('div')`
  background-color: ${t.c.nav};
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
  position: relative;
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
  top: -5px;
  padding-left: 0.7rem;
  color: ${t.c.white};
`
export const MobileNavContainer = styled('div')`
  padding-left: ${t.s(2)};
  background: #2a2828;
  padding-bottom: 30px;
  display: ${p => (p.isOpen ? 'block' : 'none')};
`
