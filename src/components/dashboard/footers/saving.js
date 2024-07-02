import React, { Fragment, useState } from "react";
import MyModal from "@/components/modal";


export default function Savings() {
  const [showModal, setShowModal] = useState(false)
  const [accountNumber, setAccountNumber] = useState('')
  const [pin, setpin] = useState('')


  const handleLogin = (e) => {
    e.preventDefault();
    if(accountNumber === '' && pin === ''){
      alert("Input field cannot be empty")
  }else{
    setShowModal(true)
  }
 
  };



  return (
    <Fragment>
     {/* <CardLineChart/>
      <CardBarChart/>
      <CardTable/> */}
      
<div className="flex flex-wrap">

          <div className="relative mt-40 w-full flex flex-col min-w-0 break-words bg-blue-600 rounded mb-6 xl:mb-0 shadow-lg">
        <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            <div className="relative w-full h-[80px] pr-4 max-w-full flex-grow flex-1">
              <h5 className="text-white uppercase font-bold text-xs">
               Total saving Balance
              </h5>
              <span className="font-semibold text-xl text-white">
                $900000
              </span>

              <p className="font-semibold text-sm text-white">
                your total saving balance
              </p>
            </div>
          
          </div>
        
        </div>
      </div>




      <div className="relative w-full flex flex-col min-w-0 break-words bg-blue-600 rounded mb-6 xl:mb-0 shadow-lg">
        <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            <div className="relative w-full h-[80px] pr-4 max-w-full flex-grow flex-1">
              <h5 className="text-white uppercase font-bold text-xs">
               Target Amount
              </h5>
              <span className="font-semibold text-xl text-white">
                Target Not Set
              </span>

              <p className="font-semibold text-sm text-white">
                Any Time you can change your target
              </p>
            </div>
          
          </div>
        
        </div>
      </div>
       
        <div className="w-full xl:w-4/12 px-4">
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
        </div>
        <div className="w-full xl:w-4/12 px-4">
                </div>
                <MyModal restricted="Account Has Been Restricted please Contact Us via email for more information" isVisible={showModal} onClose={()=>{setShowModal(false)}} />
      </div>
    </Fragment>
  );
}