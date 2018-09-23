import styled from 'react-emotion'
import { css } from 'emotion'
import t from '../../theme'
import bg from '../../img/mountain_bg.jpg'

export const Container = styled('div')`
  background-image: url(${bg});
  background-size: cover;
  position: relative;
  ${t.mq.l} {
    min-height: 100vh;
  }
`

export const Content = styled('div')`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const HeroLogo = css`
  width: 6rem;
  padding-top: 5rem;
  margin-bottom: 2rem;
  opacity: 0.8;
  ${t.mq.l} {
    width: 8rem;
    padding-top: 10rem;
  }
`

export const HeroTitle = styled('div')`
  font-size: 3rem;
  color: white;
  font-family: fantasy;
  ${t.mq.l} {
    font-size: 5.5rem;
  }
`

export const HeroSubTitle = styled('div')`
  color: ${t.c.white};
  font-family: Lora;
  margin-bottom: 15rem;
  font-size: 2.2rem;
  ${t.mq.l} {
    font-size: 3.5rem;
  }
`
