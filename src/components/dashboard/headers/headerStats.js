import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
// components

import CardStats from "../cards/cardStats";

export default function HeaderStats() {
  const count = useSelector((state) => state.users)
  return (
    <>
      {/* Header */}
      <div className="relative bg-red-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap justify-start items-center">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Balance"
                  statTitle="$5,237,054.00"
                   statlast="Your Total Balance"
                  statArrow="up"
                  statPercent="3.48"
                 
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-green-500"
                />
              </div>
              
            </div>


            <div className="flex flex-wrap justify-start items-center">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Saving"
                  statTitle="$900, 000.00"
                   statlast="save Money Monthly"
                  statArrow="up"
                  statPercent="3.48"
                 
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-green-500"
                />
              </div>
              
            </div>



            <div className="flex flex-wrap justify-start items-center">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Credited this Month"
                  statTitle="$0.00"
                   statlast="$0.00 Since Last Month"
                  statArrow="up"
                  statPercent="3.48"
                 
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-green-500"
                />
              </div>
              
            </div>


            <div className="flex flex-wrap justify-start items-center">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Debited this Month"
                  statTitle="$1,500, 000.00"
                  statlast="$0.00 Since Last Month"
                  statArrow="up"
                  statPercent="3.48"
                 
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-green-500"
                />
              </div>
              
            </div>



            


          </div>
        </div>
      </div>
    </>
  );
}