import React, { Fragment, useState } from "react";
import MyModal from "@/components/modal";


export default function VirtualCard() {

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
        <div className="md:w-full bg-white mt-40 shadow-lg ">

          <h1 className="text-center  font-bold text-2xl">Card</h1>
          <h1 className="text-center  font-bold text-2xl">Apply For Virtual Debit Card</h1>
          <p className="p-4">State Bank Virtual Card, also know as electronic card or e-card, is a limit transactions. it provides 


            an easy and secure way of transacting online without providing the primary card/ merchant.Send us your application PDF file
          </p>


          <input
            type="file"
            className="md:w-[400px] m-4 px-4 py-2 text-base border-2 border-blue-800 rounded outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
            id="accountNumber"
            onChange={(e) => setAccountNumber(e.target.value)} 
            
          />


<button
          type="submit"
              
                className="bg-red-700 hover:bg-blue-700 w-40 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>


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