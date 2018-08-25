import React from 'react'
import animation from './animation.js'
import { Container, Content } from './QuickAccessBar.styled';

export const QuickAccessBar = () => {
  const scrollHandler = (e, target) => {  
    animation.jumpTo(target)
  }
  return (
    <Container>
      <Content id="scroll_control">
        <p className="menu_sign">Quick Access -></p>
        <span onClick={(e) => scrollHandler(e, "#clinic_hero")}>Clinic</span>
        <span onClick={(e) => scrollHandler(e, "#training_hero")}>Training</span>
        <span onClick={(e) => scrollHandler(e, "#library_hero")}>Library</span>
      </Content> 
    </Container>
  )
}