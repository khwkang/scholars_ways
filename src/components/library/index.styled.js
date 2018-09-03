import styled from 'react-emotion'
import t from '../../theme'

export const Template = styled('div')`
  ${t.mq.l} {
    display: flex;
  }
`
export const Container = styled('div')`
  ${t.mq.l} {
    width: 60%;
    margin-left: 26%;
  }
`
export const Content = styled('div')`
  padding: 3rem 1.5rem;
`
export const Title = styled('h1')`
  margin-bottom: 2rem;
`
