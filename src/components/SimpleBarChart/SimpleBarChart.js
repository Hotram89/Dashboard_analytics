import React from "react";
import { data } from "../../data/dataMock";
import "./SimpleBarChart.css";
import {
  BarChart,
  Bar,
  Legend,
  Tooltip,
  YAxis,
  XAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const FirstBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height="50%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="poids" fill="#282D30" barSize={10} />
        <Bar dataKey="calories" fill="#E60000" barSize={10} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default FirstBarChart;
