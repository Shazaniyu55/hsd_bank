import React from "react";

// components

import FooterAdmin from "@/components/dashboard/footers/footerAdmin";
import Sidebar from "@/components/dashboard/sidebar/sideBar";
import HeaderStats from "@/components/dashboard/headers/headerStats";
import AdminNavbar from "@/components/dashboard/navbar/adminNavBar";
import MobileDeposite from "@/components/dashboard/footers/mobiledepo";
function Transfer(){

    return(
        <>
        <Sidebar />
        <div className="relative md:ml-64 bg-red-600">
          <AdminNavbar />
          {/* Header */}
         
          <div className="px-4 md:px-10 mx-auto w-full -m-24">
            <MobileDeposite/>
          </div>
        </div>
      </>
    )
}

export default Transfer