import React from "react";
import RD from "react-dom";
import sc from "styled-components";

import Button from "./button";

const Container = sc.div`
   display: flex;
   flex-direction: column;
`;

const Index = () => (
  <Container>
    <Button>Hehe</Button>
    <Button>Hehe</Button>
  </Container>
);

RD.render(<Index />, document.getElementById("app"));
