import React from "react";
import Chart from "chart.js/dist/Chart";

export default function CardPieChart() {
  React.useEffect(() => {
    let config = {
      type: "pie",
      data: {
        labels: [
          "Pending Check",
          "Pending Repair",
          "Pending",
        ],
        datasets: [
          {
            label: "Pending Items",
            backgroundColor: ["#4F9965", "#4c51bf", "#F2994A"],
            borderColor: "#fff",
            data: [30, 20, 50], // Adjust data values as per your requirement
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
          },
          tooltip: {
            callbacks: {
              label: function(tooltipItem) {
                return tooltipItem.label + ': ' + tooltipItem.raw.toFixed(0);
              }
            }
          }
        }
      },
    };

    let ctx = document.getElementById("pie-chart").getContext("2d");
    window.myPie = new Chart(ctx, config);

    // Clean up function for useEffect
    return () => {
      window.myPie.destroy();
    };
  }, []); // Empty dependency array to run effect only once

  return (
    <>
      <div className="relative mt-40 flex flex-col bg-green-600 shadow-lg rounded">
        <p className="p-4 m-4">Balance Flow</p>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-96">
            <canvas id="pie-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}