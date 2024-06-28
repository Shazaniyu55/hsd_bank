import React, {useState, Fragment} from "react";
import { FaPlus} from 'react-icons/fa'



export default function CardStats({
  statSubtitle,
  statTitle,
  statlast,
}) {
  const [showModal, setShowModal] = useState(false)


  return (
    <Fragment>
      <div className="relative flex flex-col min-w-0 break-words bg-black rounded mb-6 xl:mb-0 shadow-lg">
        <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            <div className="relative w-full h-[80px] pr-4 max-w-full flex-grow flex-1">
              <h5 className="text-white uppercase font-bold text-xs">
                {statSubtitle}
              </h5>
              <span className="font-semibold text-xl text-white">
                {statTitle}
              </span>

              <p className="font-semibold text-sm text-white">
                {statlast}
              </p>
            </div>
          
          </div>
        
        </div>
      </div>
    </Fragment>
  );
}

