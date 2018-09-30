import styled from 'react-emotion'
import t from '../../theme'

export const Master = styled.div`
`

export const Container = styled.div`
  padding: ${t.s(3)} ${t.s(1)};
  ${t.mq.l} {
    padding: ${t.s(5)} ${t.s(6)};
  }
`

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const PageTitle = styled('h1')`
  margin-bottom: 1.4rem;
`

export const Module = styled('div')`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${p => p.backgroundImageSource});
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
  opacity: 0.1;
  z-index: 0;
  @include transition(all, 0.5s, ease);
`

export const ModuleTitle = styled('h2')`
  font-size: 2rem;
  color: white;
  font-weight: 500;
  z-index: 30;
`
