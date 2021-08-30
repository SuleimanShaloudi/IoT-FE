import React from "react";
import { Line } from "react-chartjs-2";
import { LineChartProps } from "./LineChart.types";
import WarningRoundedIcon from '@material-ui/icons/WarningRounded';
import SwapHorizontalCircleIcon from '@material-ui/icons/SwapHorizontalCircle';

const LineChart = (props: LineChartProps) => {
  let chartRefernece: any = null;

  const data = {
    labels: props.data.map((e, i) => i),
    datasets: [
      {
        label: props.unit,
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
    aspectRatio: 1,  // this would be a 1:1 aspect ratio
  };

  const toCelecius = () => {
    const data1 = props.data.map(e => e - 273)
    chartRefernece.data.datasets.forEach((dataset: any, index: number) => {
      dataset.label = "Celesius"
      dataset.data = data1
    });
    chartRefernece.update()

  }

  return (<div style={{ position: "relative" }}>
    {props.unit === "Kelvin" ? <SwapHorizontalCircleIcon onClick={toCelecius} style={{
      cursor: "pointer",
      color: "rgb(0, 68, 125)",
      fontSize: "2rem",
      position: "absolute",
      top: "-15px",
      left: "6px"
    }} /> : ''}
    {props.data[props.data.length - 1] > props.maxValue ? <WarningRoundedIcon style={{
      color: "goldenrod",
      fontSize: "3rem",
      position: "absolute",
      top: "-15px",
      right: "6px"
    }} /> : ''}
    <Line ref={ref => chartRefernece = ref}
      height={undefined}
      width={undefined}
      data={data} options={options} />

    <label>{props.label}</label>

  </div >);
};

export default LineChart;
