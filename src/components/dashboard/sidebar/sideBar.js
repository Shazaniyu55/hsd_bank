import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {FaBars, FaTimes} from 'react-icons/fa'
import { useDispatch, useSelector } from "react-redux";
import NotificationDropdown from "../dropdowns/notificationDrowDown";
import UserDropdown from "../dropdowns/userDropDown";
import { FiUser, FiBarChart, FiDollarSign, FiBook, FiCreditCard } from 'react-icons/fi'; // Import icons from react-icons

// import {
//   updateStart,
//   updateSuccess,
//   updateFailure,
//   deleteUserStart,
//   deleteUserSuccess,
//   deleteUserFailure,
//   signoutSuccess,
// } from '../../../store/slice/userSlice';



export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const router = useRouter();
  const dispatch = useDispatch()

  const handleSignout =  () => {
   
        router.push('/')
     
  };
  return (
    <>
    <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-gray-600  flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
      <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
        {/* Toggler */}
        <button
          className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-gray-700 rounded border border-solid border-black"
          type="button"
          onClick={() => setCollapseShow("bg-secondary m-2 py-3 px-6")}
        >
          <FaBars size={20} className="text-white"/>
        </button>
        {/* Brand */}
        <Link href="">
          <span
            className="md:block text-left md:pb-2 text-white mr-0 inline-block whitespace-nowrap text-2XL uppercase font-bold p-4 px-0"
          >
            Trade Dashboard
          </span>
        </Link>
       
        {/* Collapse */}
        <div
          className={
            "bg-gray-600 md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
            collapseShow
          }
        >
          {/* Collapse header */}
          <div className="md:min-w-full md:hidden block pb-4 bg-gray mb-4 border-b border-black ">
            <div className="flex flex-wrap">
              <div className="w-6/12">
                <Link href="/">
                  <span
                    className="md:block text-left md:pb-2 text-white mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                  >
                    HSBD
                  </span>
                </Link>
              </div>
              <div className="w-6/12 flex justify-end">
                <button
                  type="button"
                  className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-blue-700 rounded border border-solid border-black"
                  onClick={() => setCollapseShow("hidden")}
                >
                  <FaTimes size={20}/>
                </button>
              </div>
            </div>
          </div>
          {/* Form */}
         
          {/* Divider */}
          <hr className="my-4 md:min-w-full" />
          {/* Navigation */}
          <ul className="md:flex-col hover:bg-black md:min-w-full flex flex-col list-none">
            <li className="items-center flex">
              <FiBarChart className='mr-2 text-white' size={20} />
              <Link href="/admin/dashboard">
                <span
                  className={
                    "text-xs  py-3 font-bold block " +
                    (router.pathname.indexOf("/admin/dashboard") !== -1
                      ? "text-white hover:text-white"
                      : "text-white hover:text-white")
                  }
                >
                  Dashboard
                </span>
              </Link>
            </li>
            {/* Other navigation items */}
          </ul>

         
          <ul className="md:flex-col hover:bg-black md:min-w-full flex flex-col list-none">
            <li className="items-center flex">
              <FiUser className='mr-2 text-white' size={20} />
              <Link href="/admin/transfer">
                <span
                  className={
                    "text-xs  py-3 font-bold block " +
                    (router.pathname.indexOf("/admin/transfer") !== -1
                      ? "text-white hover:text-white"
                      : "text-white hover:text-white")
                  }
                >
                  My Account
                </span>
              </Link>
            </li>
            {/* Other navigation items */}
          </ul>       

          <ul className="md:flex-col hover:bg-black md:min-w-full flex flex-col list-none">
            <li className="items-center flex">
              <FiDollarSign className='mr-2 text-white' size={20} />
              <Link href="/admin/transfer">
                <span
                  className={
                    "text-xs  py-3 font-bold block " +
                    (router.pathname.indexOf("/admin/transfer") !== -1
                      ? "text-white hover:text-white"
                      : "text-white hover:text-white")
                  }
                >
                  Account summary
                </span>
              </Link>
            </li>
            {/* Other navigation items */}
          </ul>


          
          <ul className="md:flex-col hover:bg-black md:min-w-full flex flex-col list-none">
            <li className="items-center flex">
              <FiBook className='mr-2 text-white' size={20} />
              <Link href="/admin/transfer">
                <span
                  className={
                    "text-xs  py-3 font-bold block " +
                    (router.pathname.indexOf("/admin/transfer") !== -1
                      ? "text-white hover:text-white"
                      : "text-white hover:text-white")
                  }
                >
                  Send Money
                </span>
              </Link>
            </li>
            {/* Other navigation items */}
          </ul>


          <ul className="md:flex-col hover:bg-black md:min-w-full flex flex-col list-none">
            <li className="items-center flex">
              <FiCreditCard className='mr-2 text-white' size={20} />
              <Link href="/admin/transfer">
                <span
                  className={
                    "text-xs  py-3 font-bold block " +
                    (router.pathname.indexOf("/admin/transfer") !== -1
                      ? "text-white hover:text-white"
                      : "text-white hover:text-white")
                  }
                >
                  Virtual Card
                </span>
              </Link>
            </li>
            {/* Other navigation items */}
          </ul>        

         


          


          
          {/* Divider */}
          <hr className="my-4 md:min-w-full" />
          {/* Heading */}
          {/* Navigation */}
          <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
            <li className="inline-flex">
              <button
                onClick={handleSignout}
                target="_blank"
                className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Logout
              </button>
            </li>
            {/* Other navigation items */}
          </ul>
        </div>
      </div>
    </nav>
  </>
  );
}