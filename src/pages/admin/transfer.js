import React from "react";

// components

import FooterAdmin from "@/components/dashboard/footers/footerAdmin";
import Sidebar from "@/components/dashboard/sidebar/sideBar";
import HeaderStats from "@/components/dashboard/headers/headerStats";
import AdminNavbar from "@/components/dashboard/navbar/adminNavBar";

function Transfer(){

    return(
        <>
        <Sidebar />
        <div className="relative md:ml-64 bg-blueGray-100">
          <AdminNavbar />
          {/* Header */}
         
          <div className="px-4 md:px-10 mx-auto w-full -m-24">
            
          </div>
        </div>
      </>
    )
}

export default Transfer