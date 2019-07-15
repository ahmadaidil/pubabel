import React from "react";
import sc from "styled-components";

const Container = sc.div`
  overflow: hidden;
  width: 100%;
  min-height: 3.875rem;
  top: 0;
  position: fixed;
  background: #ffd7ba;
  outline: 1px solid #606060;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftContent = sc.div`
  padding-left: 1rem;
`;

const RightContent = sc.div`
  padding-right: 1rem;
`;

const Navbar = () => (
  <Container>
    <LeftContent>hehehe</LeftContent>
    <RightContent>hehehe</RightContent>
  </Container>
);

export default Navbar;
