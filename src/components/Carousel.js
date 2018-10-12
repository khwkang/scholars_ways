import React from 'react'
import {
  CarouselContainer,
  StyledCarousel,
  ArrowControlContainer,
  ArrowControl,
} from './Carousel.styled'
import LeftArrow from '../img/arrows-left.png'
import RightArrow from '../img/arrows-right.png'

export class Carousel extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'))
    }, 0)
  }

  render() {
    return (
      <CarouselContainer>
        <StyledCarousel
          autoplay={true}
          wrapAround={true}
          frameOverflow="show"
          renderCenterLeftControls={({ previousSlide }) => (
            <ArrowControlContainer onClick={previousSlide}>
              <ArrowControl src={LeftArrow} />
            </ArrowControlContainer>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <ArrowControlContainer onClick={nextSlide}>
              <ArrowControl src={RightArrow} />
            </ArrowControlContainer>
          )}
        >
          {this.props.children}
        </StyledCarousel>
      </CarouselContainer>
    )
  }
}
