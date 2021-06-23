import React from "react";
import "./Shopping.css";
import { Line, defaults } from "react-chartjs-2";
import { Converter } from "../../components/index";

defaults.font.family = "Josefin Sans";
console.log(defaults.font.family);

const ShoppingChart = () => {
  return (
    <section className="mainContainer">
      <div className="chartContainer">
        <LineChart />
      </div>
      <div className="buyContainer">
        <Converter />
      </div>
    </section>
  );
};

const state = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Savings",
      fill: false,
      lineTension: 0.3,
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "green",
      borderWidth: 1,
      data: [65, 59, 80, 81, 56],
    },
  ],
};

const LineChart = () => {
  return (
    <div>
      <Line
        data={state}
        options={{
          title: {
            display: true,
            text: "Average Savings Per month",
            fontSize: 20,
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

export default ShoppingChart;
