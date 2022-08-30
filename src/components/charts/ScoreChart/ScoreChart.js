import React from "react";
import "./ScoreChart.css";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ScoreChart = () => {
  const data = [
    {
      name: "18-24",
      uv: 31.47,
      pv: 3400,
      fill: "#8884d8",
    },
    {
      name: "30-34",
      uv: 15.69,
      pv: 1398,
      fill: "#8dd1e1",
    },
    {
      name: "35-39",
      uv: 8.22,
      pv: 9800,
      fill: "#82ca9d",
    },
    {
      name: "unknow",
      uv: 6.67,
      pv: 4800,
      fill: "#FF0000",
    },
  ];
  const style = {
    top: "50%",
    right: 0,
    transform: "translate(0, -50%)",
    lineHeight: "24px",
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadialBarChart
        cx="50%"
        cy="50%"
        innerRadius="10%"
        outerRadius="80%"
        barSize={10}
        data={data}
      >
        <RadialBar
          minAngle={15}
          label={{ position: "insideStart", fill: "#fff" }}
          background
          clockWise
          dataKey="uv"
        />
        <Legend
          iconSize={10}
          layout="vertical"
          verticalAlign="middle"
          wrapperStyle={style}
        />
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default ScoreChart;
