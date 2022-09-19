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
        <XAxis
          dataKey="name"
          stroke="#FFFFFF"
          axisLine={false}
          tickLine={false}
          fillOpacity={0.5}
          tickMargin={10}
          style={{ transform: "scale(0.9)" }}
        />
        <YAxis
          hide={true}
          axisLine={false}
          tick={false}
          domain={["dataMin - 5", "dataMax + 5"]}
        />
        <Tooltip />
        <Legend verticalAlign="top" align="left" content={"Hello"} />
        <Line
          type="basis"
          dataKey="pv"
          stroke="#FFFFFF"
          dot={false}
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default RedLineChart;
