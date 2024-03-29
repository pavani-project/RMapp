// import React from "react";

// const CustomerChart = () => {
//   return <div></div>;
// };

// export default CustomerChart;

import React from "react";
import { Line } from "react-chartjs-2";
// eslint-disable-next-line
import Chart from "chart.js/auto";

const state = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Rainfall",
      fill: false,
      lineTension: 0.5,
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [65, 59, 80, 81, 56],
    },
  ],
};

const CustomerChart = () => {
  return (
    <div>
      <Line
        data={state}
        options={{
          title: {
            display: true,
            text: "Average Rainfall per month",
            fontSize: 10,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
};

export default CustomerChart;
