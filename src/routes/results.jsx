import React from "react";
import { useLocation } from "react-router-dom";
import Layout from "../layout";
import Banner from "../assets/banner.png";
import NormalDistChart from "../components/charts/NormalDistChart";
import LineChart from "../components/charts/LineChart";

const Results = () => {
  const location = useLocation();
  const { athlete } = location.state;

  return (
    <Layout>
      <main className="flex  flex-col-reverse md:flex-row justify-between my-10 gap-10">
        <div className="w-full md:w-[70%] flex-col space-y-8">
          <div className="bg-white shadow-sm flex flex-col md:flex-row items-start md:items-center space-y-5 md:space-y-0 justify-between rounded-2xl p-8">
            <div>
              <label
                htmlFor="report"
                className="block mb-1 text-xs font-medium text-gray-900"
              >
                Select Date
              </label>
              <input
                type="date"
                className="px-8 bg-white border border-blue-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                placeholder="Select date"
              />
            </div>
            <div>
              <label
                htmlFor="report"
                className="block mb-1 text-xs font-medium text-gray-900"
              >
                Report Type
              </label>
              <select
                id="report-type"
                className="px-8 bg-white border border-blue-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option value="gmr">Gray Matter Report</option>
                <option value="rt2">Report Type 2</option>
                <option value="rt3">Report Type 3</option>
              </select>
            </div>
            <button className="bg-[#4EAEEA] px-10 py-2 rounded-full text-white">
              generate
            </button>
          </div>
          <div className="bg-white shadow-sm  rounded-2xl">
            <h1 className="text-slate-800 font-medium text-xl p-4">
              Grey Matters
            </h1>
            <div>
              <img src={Banner} alt="banner-image" className="rounded-b-2xl h-44 w-full" />
            </div>
          </div>
          <div className="bg-white shadow-sm  rounded-2xl p-4">
            <h1 className="text-slate-800 font-medium text-lg mb-4">
              Statistics
            </h1>
            <h2 className="text-slate-700">Volume: {athlete.volume}</h2>
            <h2 className="text-slate-700">
              Noraml Range: {athlete.normalRange}
            </h2>
          </div>
          <div className="bg-white shadow-sm  rounded-2xl p-4">
            <NormalDistChart />
          </div>
          {/* <div className="bg-white shadow-sm  rounded-2xl p-4">
            <LineChart />
          </div> */}
          <div className="bg-white shadow-sm  rounded-2xl p-4">
            <h1 className="text-slate-800 font-medium text-lg mb-4">
              Interpretation
            </h1>
            <h2 className="text-slate-700 text-justify">
              {athlete.interpretation}
            </h2>
          </div>
        </div>
        <div className="w-full md:w-[30%] flex-col space-y-8">
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex-col items-center justify-between">
              <img
                src={athlete.img_src}
                alt="player-avatar"
                className="h-14 w-14 rounded-full mb-3 shadow-md shadow-blue-400"
              />
              <h1 className="text-slate-800 text-lg mb-1">
                {athlete.name} ( 35 Years )
              </h1>
              <h2 className="text-slate-700 text-sm mb-1">Tel No: 9283*****</h2>
              <h2 className="text-slate-700 text-sm">Email: {athlete.email}</h2>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-5 hidden md:block shadow-sm">
            <p className="text-slate-700 text-justify">
              {athlete.interpretation}
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Results;
