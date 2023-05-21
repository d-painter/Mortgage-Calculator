import "./App.css";

//Standard Imports
import Header from "./Header";
import Mortgage from "./Mortgage";
import { useState, useEffect } from "react";

//Imports for charts
import LineChart from "./LineChart.js";
import { InitialData } from "./Data";

function App() {
  const [graphData, setGraphData] = useState({
    labels: InitialData.map((data) => data.month),
    datasets: [
      {
        label: "Remaining Balance",
        data: InitialData.map((data) => data.remainingBalance),
        backgroundColor: ["white"],
        borderColor: "white",
        borderWidth: 2,
      },
    ],
  });

  function updateGraph(newData) {
    setGraphData({
      labels: newData.map((data) => data.month),
      datasets: [
        {
          label: "Remaining Balance",
          data: newData.map((data) => data.remainingBalance),
          backgroundColor: ["white"],
          borderColor: "white",
          borderWidth: 2,
        },
      ],
    });
  }

  return (
    <div className="App">
      <Header />
      <LineChart chartData={graphData} />
      <Mortgage updateGraph={updateGraph} />
    </div>
  );
}

export default App;
