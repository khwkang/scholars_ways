import styled from 'react-emotion'
import t from '../../theme'

export const Container = styled('div')`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: none;
  ${t.mq.l} {
    display: block;
  }
`

export const Content = styled('div')`
  background-color: #00000033;
  padding: 26px 40px 26px 0;
  display: flex;
  justify-content: flex-end;
  z-index: 2;
  width: 100%;
  ${t.mq.l} {
  }
  p{
    font-family: Rock Salt;
    color: #ffffff78;
    margin: 8px 21px 0px 0;
  }
  span {
    color: #ffffffd1;
    font-weight: 700;
    font-size: 20px;
    padding: 6px 20px;
    background-color: #ffffff0f;
    margin: 0 8px;
  }
`
