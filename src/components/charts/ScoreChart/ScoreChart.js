import React from "react";
import PropTypes from "prop-types";
import "./ScoreChart.css";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ScoreChart = (data) => {
  let score = data.dto.scoreData;

  return (
    <div className="score">
      <h3>Score</h3>
      <div className="score_result">
        <h4>{score.radialData[0].uv}%</h4>
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
          data={score.radialData}
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

ScoreChart.propTypes = {
  dto: PropTypes.shape({
    radialData: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.number,
        uv: PropTypes.number,
        fill: PropTypes.string,
      })
    ),
  }),
};

//constructor(data) {
//    this.radialData = [];
//    this.radialData.push({
//      name: data * 100,
//      uv: data * 100,
//      fill: "#FF0000",
//    })
