import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  BarController,
  BarElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  BarController,
  BarElement
);

export default function NormalDistChart() {
  const [chartData, setChartData] = useState({});

  const csvParser = (str, delimiter = ",") => {
    const headers = str.slice(0, str.indexOf("\n")).split(delimiter);
    const rows = str.slice(str.indexOf("\n") + 1).split("\n");
    const arr = rows.map(function (row) {
      const values = row.split(delimiter);
      const el = headers.reduce(function (object, header, index) {
        object[header] = values[index];
        return object;
      }, {});
      return el;
    });

    // return the array
    return arr;
  };

  useEffect(() => {
    fetch("/csv_file_2.csv")
      .then((response) => response.text())
      .then((data) => {
        const benchmarkData = csvParser(data);
        const wholeBrainVolumeResult = benchmarkData.map(
          (el) => el.wholebrainvolume
        );
        const dataForHistogram = {
          labels: [
            "0-1000000",
            "1000001-1100000",
            "1100001-1200000",
            "1200001-1300000",
            "1300001-1400000",
          ],
          datasets: [
            {
              label: "Frequency",
              data: [
                wholeBrainVolumeResult.filter(
                  (volumeVal) =>
                    parseInt(volumeVal) >= 0 && parseInt(volumeVal) <= 1000000
                ).length,
                wholeBrainVolumeResult.filter(
                  (volumeVal) =>
                    parseInt(volumeVal) >= 1000001 &&
                    parseInt(volumeVal) <= 1100000
                ).length,
                wholeBrainVolumeResult.filter(
                  (volumeVal) =>
                    parseInt(volumeVal) >= 1100001 &&
                    parseInt(volumeVal) <= 1200000
                ).length,
                wholeBrainVolumeResult.filter(
                  (volumeVal) =>
                    parseInt(volumeVal) >= 1200001 &&
                    parseInt(volumeVal) <= 1300000
                ).length,
                wholeBrainVolumeResult.filter(
                  (volumeVal) =>
                    parseInt(volumeVal) >= 1300001 &&
                    parseInt(volumeVal) <= 1400000
                ).length,
              ],
              backgroundColor: "#4eaeea",
              borderColor: "#272727",
              borderWidth: 1,
            },
          ],
        };
        setChartData(dataForHistogram);
      });
  }, []);

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        maxTicksLimit: 5,
        title: {
          display: true,
          text: "Frequency",
        },
      },
      x: {
        title: {
          display: true,
          text: "Whole Brain Volume",
        },
      },
    },
  };

  return (
    <>
    <h2>Distribution Plot</h2>
    <div className="h-[478px] bg-[#ffffff] text-[#272727] rounded-[35px] flex items-center justify-center p-[21px]">
      {Object.keys(chartData).length && (
        <div className="h-full w-full">
          <Bar data={chartData} options={options} />
        </div>
      )}
    </div>
    </>
  );
}
