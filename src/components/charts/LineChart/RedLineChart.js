import React from "react";
import "./RedLineChart.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { datagraph2 } from "data/dataMock";

const RedLineChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={datagraph2}
        margin={{
          top: 5,
          right: 10,
          left: 0,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="basis" dataKey="pv" stroke="#FFFFFF" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default RedLineChart;
