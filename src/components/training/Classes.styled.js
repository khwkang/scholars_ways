import styled from 'react-emotion'
import t from '../../theme'
import qigong_module from '../../img/qigong_module.jpg'
import stretching from '../../img/stretching_module.jpg'
import medicinal from '../../img/medmove_module.jpg'

export const Master = styled('div')`
  
`

export const Container = styled('div')`
  display: flex;  
  flex-wrap: wrap;
`

export const Module = styled('div')`
  position: relative;  
  display: flex;  
  align-items: center;
  justify-content: center;
  background-image: url(${qigong_module});
  background-repeat: no-repeat;
  background-size: contain;
  margin: 0 30px 30px 0;
  height: 325px;
  width: 325px;
  z-index: 1;

  ${t.mq.l} {
    height: 450px;
    width: 450px;
  }
`

export const Overlay = styled('div')`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity:0.1;
  z-index: 0;
  @include transition (all, .5s, ease);
`

export const ModuleTitle = styled('h2')`
  font-size: 2rem;
  color: white;
  font-weight: 500;
  z-index: 30;
`