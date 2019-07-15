import React from "react";
import sc from "styled-components";

const TableWrapper = sc.table`
  outline: 1px solid grey;
  border-collapse: collapse;
  width: 100%;

  th, td {
    padding: 1rem;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const EventName = sc.span`
  font-size: 1.5rem;
`;

const Table = () => (
  <TableWrapper>
    <tr>
      <td colSpan="2">
        <EventName>HEHE</EventName>
      </td>
      <td colSpan="2" width="50%" align="center">
        description is here
      </td>
      <td>button here</td>
      <td>button here</td>
    </tr>
    <tr>
      <td colSpan="2">
        <EventName>HEHE</EventName>
      </td>
      <td colSpan="2" width="50%" align="center">
        description is here
      </td>
      <td>button here</td>
      <td>button here</td>
    </tr>
    <tr>
      <td colSpan="2">
        <EventName>HEHE</EventName>
      </td>
      <td colSpan="2" width="50%" align="center">
        description is here
      </td>
      <td>button here</td>
      <td>button here</td>
    </tr>
    <tr>
      <td colSpan="2">
        <EventName>HEHE</EventName>
      </td>
      <td colSpan="2" width="50%" align="center">
        description is here
      </td>
      <td>button here</td>
      <td>button here</td>
    </tr>
  </TableWrapper>
);

export default Table;
