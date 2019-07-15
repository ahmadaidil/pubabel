import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
  {
    name: "Page A",
    rencana: 2,
    realisasi: 3.5
  },
  {
    name: "Page B",
    rencana: 3,
    realisasi: 3
  },
  {
    name: "Page C",
    rencana: 5,
    realisasi: 3
  }
];

const Chart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="rencana"
        stroke="#ffd7ba"
        strokeWidth={3}
        activeDot={{ r: 8 }}
      />
      <Line
        type="monotone"
        dataKey="realisasi"
        stroke="#606060"
        strokeWidth={3}
      />
    </LineChart>
  </ResponsiveContainer>
);

export default Chart;
