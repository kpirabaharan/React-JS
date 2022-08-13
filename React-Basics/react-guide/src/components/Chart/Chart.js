import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {
  // Since props.dataPoints is an object we first need to map each array element 
  // into an array then spread it out to pull values for totalMax
  const dataPointsValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMax = Math.max(...dataPointsValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
