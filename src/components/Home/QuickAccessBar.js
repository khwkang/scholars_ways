import React from "react";

import { Container, Content } from "./QuickAccessBar.styled";

export const QuickAccessBar = () => {
  return (
    <Container>
      <Content id="scroll_control">
        <p className="menu_sign">Quick Access -></p>
        <span>Clinic</span>
        <span>Training</span>
        <span>Library</span>
      </Content>
    </Container>
  );
};
