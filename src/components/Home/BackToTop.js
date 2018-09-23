import React from 'react'
import styled from 'react-emotion'

export default class BackToTop extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <BackToTopButtonContainer id="back_to_top">
        <span>
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
