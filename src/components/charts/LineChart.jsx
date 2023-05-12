// import React, { useState, useEffect, useRef } from "react";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   Legend,
//   LineController,
//   PointElement,
//   LineElement,
// } from "chart.js";
// import { Line } from "react-chartjs-2";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   Legend,
//   LineController,
//   PointElement,
//   LineElement
// );

// export default function LineChart() {
//   const [chartData, setChartData] = useState({});
//   const chartRef = useRef(null);

//   const csvParser = (str, delimiter = ",") => {
//     const headers = str.slice(0, str.indexOf("\n")).split(delimiter);
//     const rows = str.slice(str.indexOf("\n") + 1).split("\n");
//     const arr = rows.map(function (row) {
//       const values = row.split(delimiter);
//       const el = headers.reduce(function (object, header, index) {
//         object[header] = values[index];
//         return object;
//       }, {});
//       return el;
//     });

//     // return the array
//     return arr;
//   };

//   useEffect(() => {
//     if (chartRef.current) {
//       ChartJS.unregister(ChartJS.instances[chartRef.current.id]); // Unregister previous chart instance
//     }

//     fetch("/csv_file_2.csv")
//       .then((response) => response.text())
//       .then((data) => {
//         const benchmarkData = csvParser(data);
//         const wholeBrainVolumeResult = benchmarkData.map(
//           (el) => el.wholebrainvolume
//         );
//         const dataForLineChart = {
//           labels: benchmarkData.map((el, index) => index.toString()),
//           datasets: [
//             {
//               label: "Whole Brain Volume",
//               data: wholeBrainVolumeResult,
//               fill: false,
//               borderColor: "#4eaeea",
//               borderWidth: 1,
//             },
//           ],
//         };
//         setChartData(dataForLineChart);

//         if (chartRef.current) {
//           const newChart = new ChartJS(chartRef.current, {
//             type: "line",
//             data: dataForLineChart,
//             options: options,
//           });

//           chartRef.current = newChart;
//         }
//       });
//   }, []);

//   const options = {};

//   return (
//     <>
//       <h2>Distribution Plot</h2>
//       <div className="h-[478px] bg-[#ffffff] text-[#272727] rounded-[35px] flex items-center justify-center p-[21px]">
//         {Object.keys(chartData).length && (
//           <div className="h-full w-full">
//             {chartData && <canvas ref={chartRef} />}
//           </div>
//         )}
//       </div>
//     </>
//   );
// }
