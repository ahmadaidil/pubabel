import React from "react";
import RD from "react-dom";
import sc from "styled-components";

import { AddIcon } from "volantis-icon";

import "./styles.css";

import Button from "./button";
import Input from "./input";
import Navbar from "./navbar";
import Table from "./table";
import Chart from "./charts";
import Select from "./select";

const Container = sc.div`
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = sc.div`
  margin-top: 3.875rem;
   display: flex;
   flex-direction: column;
   width: 30%;
`;

const Index = () => (
  <Container>
    <Navbar />
    <ButtonContainer>
      <Button background="#ffd7ba" color="#606060">
        <AddIcon />
        Pengguna
      </Button>
      <Button background="#606060" color="#ebebeb">
        Hehe
      </Button>
      <Input />
      <Select value="none">
        <option disabled value="none">
          choose
        </option>
        <option value="1">1</option>
        <option value="0">0</option>
      </Select>
    </ButtonContainer>
    <Table />
    <Chart />
  </Container>
);

RD.render(<Index />, document.getElementById("app"));
