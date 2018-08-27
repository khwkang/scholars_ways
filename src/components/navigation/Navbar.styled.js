import styled from 'react-emotion'
import t from '../../theme'
import Link from '../LinkTrack.js';

export const NavbarStyled = styled('div')`
  position: fixed;
  background: ${t.c.nav};
  height: 100%;
  overflow: scroll;
  overflow-x: hidden;
  overflow-y: auto;
  padding-left: 2rem;
  display:none;
  width: ${t.s(8)};
  
  ::-webkit-scrollbar { 
    width: 0.5em;
  }
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px #2a2828;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #3a3a3a;
    outline: 1px solid slategrey;
  }

  ${t.mq.l} {
    display: block;
  }
`

export const NavLogoWrapper = styled(Link)`
  display: flex;
  justify-content: center;
  margin-left: -2rem;
`

export const NavLogo = styled('img')`
  max-height: 70px;
  width: 70px;
  margin: 15px 0 0px 0;
`

export const NavLineBreak = styled('hr')`
  width: 90%;
  background-color: #4d4d4d33;
`

export const MenuLabel = styled('p')`
  font-size: 1.1rem;
  font-weight: 700;
  padding-bottom: 1rem;
  color: #757575;
  text-transform: uppercase;
`

export const MenuItem = styled(Link)`
  display: block;
  color: #d1d1d1;
  font-size: 1.1rem;
  line-height: 2.2rem;
  font-weight: 500;
`


