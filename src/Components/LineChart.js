import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js/auto";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function LineChart({ chartData }) {
  const options = {
    scales: {
      x: {
        grid: { color: "grey" },
        ticks: { color: "white", beginAtZero: true },
        scaleLabel: { display: true, labelString: "Month" },
        title: { display: true, text: "Months", color: "white" },
      },
      y: {
        grid: { color: "grey" },
        ticks: { color: "white", beginAtZero: true },
        title: { display: true, text: "Value (£)", color: "white" },
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
        color: "white",
      },
    },
  };

  return (
    <div className="canvas" style={{ width: 700 }}>
      <Line data={chartData} options={options} />
    </div>
  );
}
