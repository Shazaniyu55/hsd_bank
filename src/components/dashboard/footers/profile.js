import React from "react"
import { useSelector } from "react-redux";
// components

export default function Profile() {

  // const { currentUser } = useSelector((state) => state.user);



 

  return (
    <>
      <div className="relative  flex flex-col min-w-0 break-words bg-secondary w-full mb-6 shadow-xl rounded-lg mt-16">
        <div className="px-6">
         
          <div className="text-center mt-12">
            <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
              {/* {currentUser.username} */}Micheal 
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
              {/* {currentUser.email} */}Eastin
            </div>
            <div className="mb-2 text-blueGray-600 mt-10">
              <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
              The Purpose of 
            </div>
            <div className="mb-2 text-blueGray-600">
              <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
              Our Lives Is to Be Happy
            </div>
          </div>
          
        </div>
      </div>




      <div className="relative  flex flex-col min-w-0 break-words bg-secondary w-full mb-6 shadow-xl rounded-lg mt-16">
      <div className="relative w-full flex flex-col min-w-0 break-words  rounded mb-6 xl:mb-0 ">
        <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            <div className="relative w-full h-[80px] pr-4 max-w-full flex-grow flex-1">
              <h5 className="text-black uppercase font-bold text-xs">
                Balance
              </h5>
              <span className="font-semibold text-xl text-green-600">
                $5,237,054.00
              </span>

              <p className="font-semibold text-sm text-black">
                Your Total Balance
              </p>
            </div>
          
          </div>
        
        </div>
      </div>
      </div>


      <div className="relative  flex flex-col min-w-0 break-words bg-secondary w-full mb-6 shadow-xl rounded-lg mt-16">
      <div className="relative w-full flex flex-col min-w-0 break-words  rounded mb-6 xl:mb-0 ">
        <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            <div className="relative w-full h-[80px] pr-4 max-w-full flex-grow flex-1">
              <h5 className="text-black uppercase font-bold text-xs">
                Saving Balance
              </h5>
              <span className="font-semibold text-xl text-blue-600">
                $900,000.00
              </span>

              <p className="font-semibold text-sm text-black">
                Your Total Saving Balance
              </p>
            </div>
          
          </div>
        
        </div>
      </div>
      </div>
    </>
  );
}