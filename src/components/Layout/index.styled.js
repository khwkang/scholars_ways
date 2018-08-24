import styled from 'react-emotion'
import { css } from 'emotion'
import t from '../../theme'

export const Layout = styled('div')`
  height: 100vh;
  margin-bottom: 10px;
`
export const Container = styled('div')`
  padding-right: 0;
  ${t.mq.l} {
    margin-left: ${t.s(8)};
  }
`



