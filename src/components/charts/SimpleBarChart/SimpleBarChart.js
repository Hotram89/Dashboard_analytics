import React from "react";
import Dto from "data/Dto";
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
  const filteredProps = new Dto().scoreProps();

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={filteredProps}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 35,
        }}
      >
        <CartesianGrid strokeDasharray="3" vertical={false} />
        <XAxis dataKey="name" padding={{ bottom: 10 }} />
        <YAxis hide="true" />
        <Tooltip />
        <Legend
          iconType="circle"
          iconSize="10"
          verticalAlign="top"
          align="right"
        />

        <Bar dataKey="poids" name="Poids (kg)" fill="#282D30" barSize={10} />
        <Bar
          dataKey="calories"
          name="Calories brûlées (kCal)"
          fill="#E60000"
          barSize={10}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default FirstBarChart;
