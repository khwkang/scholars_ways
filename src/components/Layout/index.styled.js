import styled from 'react-emotion'
import t from '../../theme'

export const Container = styled('div')`
  height: 100vh;
  margin-bottom: 10px;
`
export const Content = styled('div')`
  padding-right: 0;
  ${t.mq.l} {
    margin-left: ${t.s(8)};
  }
`
