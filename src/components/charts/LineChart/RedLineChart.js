import React from "react";
import PropTypes from "prop-types";
import "./RedLineChart.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Rectangle,
} from "recharts";

const CustomTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <div className="custonToottipRed">
        <p>{`${payload[0].value}`} min</p>
      </div>
    );
  }
};

const CustomRectangle = ({ points }) => {
  return (
    <Rectangle
      fill="#000000"
      opacity={0.2}
      x={points[1].x}
      width={1000}
      height={300}
    />
  );
};

const RedLineChart = (data) => {
  const redLineDto = data.dto.sessionData.session;

  const Title = () => {
    return <div className="rechart-title">Durée moyenne des sessions</div>;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={redLineDto}
        margin={{
          top: 20,
          right: 20,
          left: 20,
          bottom: 20,
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
        <Tooltip content={<CustomTooltip />} cursor={<CustomRectangle />} />

        <Line
          type="basis"
          dataKey="pv"
          stroke="#FFFFFF"
          dot={false}
          strokeWidth={2}
          activeDot={{ stroke: "white", r: 8 }}
        />
        <Legend verticalAlign="top" align="left" content={Title} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default RedLineChart;

RedLineChart.propTypes = {
  dto: PropTypes.shape({
    session: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.number,
        pv: PropTypes.number,
      })
    ),
  }),
};
