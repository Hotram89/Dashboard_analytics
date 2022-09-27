import React from "react";
import "./SimpleRadarChart.css";
import Dto from "data/Dto";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import ApiProvider from "data/ApiProvider";

const dataBrute = new ApiProvider().getRadarData();

const SimpleRadarChart = (url) => {
  let idFilter = dataBrute.filter((el) => {
    if (url.id == el.userId) {
      return true;
    }
  });
  const filteredProps = new Dto().radarProps(idFilter);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={filteredProps}>
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
