import React, { useState, useEffect, useRef } from "react";
import { csvToArray } from "../../utils/csvToArray";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, Tooltip, Legend);

export default function NormalDistChart() {
  const [chartData, setChartData] = useState({});
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy(); // Destroy previous chart instance
    }
    fetch("/csv_file_2.csv")
      .then((response) => response.text())
      .then((data) => {
        const benchmarkData = csvToArray(data);
        const wholeBrainVolumeResult = benchmarkData.map(
          (el) => el.wholebrainvolume
        );
        const dataForBellCurve = generateBellCurveData(wholeBrainVolumeResult);
        setChartData(dataForBellCurve);
        // Create new chart instance
        const newChart = new ChartJS(chartRef.current, {
          type: "line",
          data: dataForBellCurve,
          options: options,
        });

        chartRef.current = newChart;
      });
  }, []);

  const generateBellCurveData = (data) => {
    // Calculate mean and standard deviation
    const mean =
      data.reduce((acc, val) => acc + parseFloat(val), 0) / data.length;
    const stdDev = Math.sqrt(
      data.reduce((acc, val) => acc + Math.pow(parseFloat(val) - mean, 2), 0) /
        data.length
    );

    // Generate x-axis values (whole brain volume range)
    const xValues = [];
    for (let i = 0; i <= 2000000; i += 10000) {
      xValues.push(i);
    }

    // Generate y-axis values (probability density)
    const yValues = xValues.map((x) => {
      const exponent = -Math.pow(x - mean, 2) / (2 * Math.pow(stdDev, 2));
      const probability =
        (1 / (stdDev * Math.sqrt(2 * Math.PI))) * Math.exp(exponent);
      return probability;
    });

    const dataForBellCurve = {
      labels: xValues,
      datasets: [
        {
          label: "Normal Distribution",
          data: yValues,
          backgroundColor: "rgba(78, 174, 234, 0.6)",
          borderColor: "rgba(78, 174, 234, 1)",
          borderWidth: 1,
          fill: true,
        },
      ],
    };

    return dataForBellCurve;
  };

  const options = {};

  return (
    <div className="h-[478px] bg-[#ffffff] text-[#272727] rounded-[35px] flex items-center justify-center p-[21px]">
      {Object.keys(chartData).length && (
        <div className="h-full w-full">
          <canvas ref={chartRef} />
          <Line
            key={chartData.labels.join()}
            data={chartData}
            options={options}
          />
        </div>
      )}
    </div>
  );
}
