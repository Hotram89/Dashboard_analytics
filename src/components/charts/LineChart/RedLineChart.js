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
import ApiProvider from "data/ApiProvider";
import Dto from "data/Dto";

const dataBrute = new ApiProvider().getRedLineData();

const RedLineChart = (url) => {
  let idFilter = dataBrute.filter((el) => {
    if (url.id == el.userId) {
      return true;
    }
  });

  const goodData = new Dto().redLineProps(idFilter);
  const Title = () => {
    return <div className="rechart-title">Durée moyenne des sessions</div>;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={goodData}
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
        <Tooltip />
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
