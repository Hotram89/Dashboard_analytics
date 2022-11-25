import React from "react";
import "./SimpleRadarChart.css";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

const SimpleRadarChart = (dto) => {
  const radarDto = dto.dto.performance.radarData;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarDto}>
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          dataKey="subject"
          stroke="#FFFFFF"
          tickSize={10}
          tickLine={false}
          axisLine={false}
        />

        <Radar name="Mike" dataKey="A" fill="#FF0101" fillOpacity={0.7} />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default SimpleRadarChart;
