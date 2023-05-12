import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import Papa from "papaparse";

const NormalDistChart = () => {
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://github.com/milanthapa1996/mrime/blob/master/src/assets/data/csv_file.csv");
      const csvData = await response.text();

      Papa.parse(csvData, {
        complete: (result) => {
          const { data } = result;
          const labels = data.slice(1).map((entry) => entry[0]);
          const dataset = {
            label: "Whole Brain Volume",
            data: data.slice(1).map((entry) => entry[1]),
            fill: false,
            borderColor: "rgba(54, 162, 235, 1)",
          };

          setChartData({ labels, datasets: [dataset] });
        },
        header: true,
      });
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2 className="text-slate-800 font-medium text-lg mb-4">
        Normal Distribution - Whole Brain Volume
      </h2>
      <Line data={chartData} />
    </div>
  );
};

export default NormalDistChart;
