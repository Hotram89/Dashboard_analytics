import React from "react";
import "./CustomTooltip.css";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="activity-tooltip">
        <p className="activity-tooltip-kg">{`${payload[0].value}Kg`}</p>
        <p className="activity-tooltip-kcal">{`${payload[1].value}kCal`}</p>
      </div>
    );
  }
  return null;
};

export default CustomTooltip;
