import React from "react";
import CardBarChart from "../cards/cardBarChart";
import CardTable from "../cards/cardTable";
import CardLineChart from "../cards/cardLineChart";


export default function FooterTransfer() {
  return (
    <>
     {/* <CardLineChart/>
      <CardBarChart/>
      <CardTable/> */}
      
<div className="flex flex-wrap">
        <div className="w-full bg-white mt-40 shadow-lg ">
          <form className="md:flex flex-col gap-4 mt-10 p-8">

          <input
            type="text"
            placeholder="username"
            className="md:w-full px-4 py-2 text-base border-2 border-blue-800 rounded outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
            id="username"
            
          />

      <input
            type="text"
            placeholder="username"
            className="md:w-full px-4 py-2 text-base border-2 border-blue-800 rounded outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
            id="username"
            
          />



          <div className="flex justify-center items-center">
          <button
          type="submit"
            className="bg-red-700 hover:bg-blue-700 w-40 text-white font-bold py-2 px-4 rounded"
          >
            Next
          </button>

          </div>


           

            
          </form>
        </div>
        <div className="w-full xl:w-4/12 px-4">
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
        </div>
        <div className="w-full xl:w-4/12 px-4">
                </div>
      </div>
    </>
  );
}