import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Layout from "../layout";
import Banner from "../assets/banner.png";
import NormalDistChart from "../components/charts/NormalDistChart";
// import LineChart from "../components/charts/LineChart";

const Results = () => {
  const location = useLocation();
  const { athlete } = location.state;
  const [date, setDate] = useState("2023-01-31");
  const updateDateValue = (e) => {
    const updatedValue = e.target.value;
    setDate(updatedValue);
  };

  return (
    <Layout>
      <main className="flex  flex-col-reverse md:flex-row justify-between my-10 gap-10">
        <div className="w-full md:w-[70%] flex-col space-y-8">
          <div className="flex justify-between items-end bg-[#ffffff] rounded-2xl p-[50px]">
            <div className="flex flex-col md:flex-row justify-start items-center space-x-4 ">
              <div>
                <label htmlFor="select date" className="block heading-text mb-2">
                  Select Date
                </label>
                <input
                  type="date"
                  className=" cursor-pointer smaller-text bg-[#ffffff] border-[1px] border-[#4EAEEA]  rounded-[10px]  w-[279px] h-[45px] p-2.5"
                  onChange={(e) => updateDateValue(e)}
                  value={date}
                  required
                ></input>
              </div>
              <div>
                <label htmlFor="Report Type" className="block heading-text mb-2 ">
                  Report Type
                </label>
                <select className="bg-[#ffffff] smaller-text border-[#4EAEEA] border-[1px] cursor-pointer rounded-[10px]  w-[279px] h-[45px] p-2.5 ">
                  <option value="">Grey Matter Report</option>
                  <option value="R1">Report Type1</option>
                  <option value="R2">Report Type2</option>
                  <option value="R3">Report Type3</option>
                  <option value="R4">Report Type4</option>
                </select>
              </div>
            </div>

            <div className="bg-[#4eaeea] font-[600] cursor-pointer rounded-[20px] w-[192px] h-[44px] text-center text-[#ffffff] p-[8px] ml-4">
              Generate
            </div>
          </div>
          <div className="bg-white shadow-sm  rounded-2xl">
            <h1 className="text-slate-800 font-medium text-xl p-4">
              Grey Matters
            </h1>
            <div>
              <img
                src={Banner}
                alt="banner-image"
                className="rounded-b-2xl h-44 w-full"
              />
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
          {/* <div className="bg-white shadow-sm  rounded-2xl p-4">
            <NormalDistChart />
          </div> */}
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
                alt="avatar"
                className="h-10 w-10 rounded-full shadow-md shadow-blue-400 bg-cover mb-4"
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
