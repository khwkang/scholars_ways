import styled from 'react-emotion'
import Carousel from 'nuka-carousel'
import t from '../theme'

export const CarouselContainer = styled.div`
  color: ${t.c.white};
  height: ${t.s(7.5)};
  overflow: hidden;
  padding: ${t.s(1)} 0;
  ${t.mq.s} {
    height: ${t.s(9)};
  }
  ${t.mq.l} {
    height: ${t.s(10)};
  }
  ${t.mq.xx} {
    height: ${t.s(11)};
  }

  img {
    object-fit: cover;
    height: 100% !important;
    width: 100%;
    margin-bottom: 0;
  }
`

export const StyledCarousel = styled(Carousel)`
  height: 100% !important;
  width: 100% !important;
  .slider-frame {
    height: 100% !important;
  }
  .slider-list {
    height: 100% !important;
  }
  .slider-slide {
    height: 100% !important;
  }
  .slider-control-bottomcenter {
    display: none;
    ${t.mq.m} {
      display: block;
    }
  }
`

export const ArrowControlContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${t.s(2)};
  height: ${t.s(2)};
  cursor: pointer;

  ${t.mq.s} {
    width: ${t.s(5)};
    height: ${t.s(3.5)};
  }
`

export const ArrowControl = styled.img`
  height: 100%;
  object-fit: contain !important;
`