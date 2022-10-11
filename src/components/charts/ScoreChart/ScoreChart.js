import React from "react";
import "./ScoreChart.css";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ScoreChart = (data) => {
  const style = {
    top: "50%",
    right: 0,
    transform: "translate(0, -50%)",
    lineHeight: "24px",
  };
  let score = data.dto.radialData;

  return (
    <div className="score">
      <h3>Score</h3>
      <div className="score_result">
        <h4>{score[0].uv}%</h4>
        <p>de votre objectif</p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <RadialBarChart
          width={400}
          height={400}
          innerRadius="60%"
          cx="50%"
          cy="50%"
          outerRadius="80%"
          barSize={10}
          data={score}
          startAngle={90}
          endAngle={250}
        >
          <circle cx="50%" cy="50%" fill="white" r="80"></circle>
          <RadialBar minAngle={15} cornerRadius={5} background dataKey="uv" />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ScoreChart;
