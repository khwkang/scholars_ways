import styled from 'react-emotion'
import t from '../../theme'

export const ListContainer = styled('div')`
  display: flex;
  flex-wrap: wrap;
`

export const List = styled('div')`
  width: ${t.s(9)};
  list-style: none;
  li {
    font-size: 1rem;
    line-height: 2rem;
    ${t.mq.l} {
      line-height: 3rem;
      font-size: 1.2rem;
    }
  }
  ${t.mq.l} {
    text-align: left;
  }
`

export const SubTitle = styled('h2')`
  margin: 2rem 0 1rem 0;
`
