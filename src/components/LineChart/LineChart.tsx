import React from "react";
import { Line } from "react-chartjs-2";
import { LineChartProps } from "./LineChart.types";

// [("1", "2", "3", "4", "5", "6")];

const LineChart = (props: LineChartProps) => {
  const data = {
    labels: props.data.map((e, i) => i),
    datasets: [
      {
        label: props.label,
        data: props.data,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return <Line height={275} data={data} options={options} />;
};

export default LineChart;
