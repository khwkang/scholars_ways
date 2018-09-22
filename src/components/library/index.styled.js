import styled from 'react-emotion'
import t from '../../theme'
import {HTMLContent} from '../Content'
export const Template = styled('div')`
  ${t.mq.l} {
    display: flex;
  }
`
export const Container = styled('div')`
  padding: 3rem 3rem;
  ${t.mq.l} {
    width: 60%;
    margin-left: 26%;
  }
`

export const Title = styled('h1')`
  margin-bottom: 2rem;
`

export const Content = styled(HTMLContent)`
  h2 {
    margin-top: 60px;
  }
  div {
    font-size: 1.2rem;
    line-height: 2rem;
  }
`