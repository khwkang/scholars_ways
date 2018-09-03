import React from 'react'
import animation from './animation.js'
import styled from 'react-emotion'

export default class BackToTop extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    animation.activateBackToTop()
  }

  scrollHandler = (e, target) => {
    animation.jumpTo(target)
  }

  render() {
    return (
      <BackToTopButtonContainer id="back_to_top">
        <span onClick={e => this.scrollHandler(e, '#home_hero')}>
          Back to Top
        </span>
      </BackToTopButtonContainer>
    )
  }
}

const BackToTopButtonContainer = styled('div')`
  opacity: 0;
  display: none;
  bottom: 33px;
  right: 34px;
  position: fixed;
  color: #ffffffc4;
  background-color: #00000085;
  padding: 8px 21px;
  border-radius: 42px;
  font-weight: 500;
  cursor: pointer;
`
