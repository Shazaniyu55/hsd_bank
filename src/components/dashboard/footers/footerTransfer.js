import React, { Fragment, useState } from "react";
import MyModal from "@/components/modal";


export default function FooterTransfer() {
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

          <h1 className="text-center  font-bold text-2xl">Transfer Money</h1>
          <form className="md:flex flex-col gap-4 mt-10 p-8" onSubmit={handleLogin}>

            

          <input
            type="text"
            placeholder="Enter account number"
            className="md:w-full px-4 py-2 text-base border-2 border-blue-800 rounded outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
            id="accountNumber"
            onChange={(e) => setAccountNumber(e.target.value)} 
            
          />

      <input
            type="text"
            placeholder="Enter Amount"
            className="md:w-full px-4 py-2 text-base border-2 border-blue-800 rounded outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
            id="amount"
            onChange={(e) => setpin(e.target.value)} 
            
          />



          <div className="flex justify-center items-center">
          <button
          type="submit"
              
                className="bg-red-700 hover:bg-blue-700 w-40 text-white font-bold py-2 px-4 rounded"
              >
                Pay Money
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
                <MyModal restricted="
Send us an email for more information at hsbccustomreservice@gmail.com" isVisible={showModal} onClose={()=>{setShowModal(false)}} />
      </div>
    </Fragment>
  );
}