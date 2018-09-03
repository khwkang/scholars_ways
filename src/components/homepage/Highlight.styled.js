import styled from 'react-emotion'
import { css } from 'emotion'
import t from '../../theme'

export const Container = styled('div')`
  margin-top: 0;
`
export const Columns = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${t.mq.m} {
    height: 50vh;
    flex-direction: row;
  }
  ${t.mq.l} {
    height: 100vh;
  }
`
export const Column = styled('div')`
  background-image: url(${p => (p.bg ? p.bg : 'none')});
  display: block;
  padding: 0.75rem;
  ${t.mq.m} {
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;
  }
`

export const ColumnBG = css`
  background-size: cover;
  align-self: stretch;
  height: 40vh;
  ${t.mq.m} {
    height: 50vh;
  }
  ${t.mq.l} {
    height: 100vh;
  }
`

export const Content = styled('div')`
  padding: 50px;
  margin-top: 20px;
  button {
    margin-top: 20px;
  }
`
export const Title = styled('h1')`
  margin-bottom: 1rem;
`

export const Text = styled('p')`
  margin-bottom: 0.5rem;
`
