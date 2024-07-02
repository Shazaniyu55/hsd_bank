import React from "react";

// components

import FooterAdmin from "@/components/dashboard/footers/footerAdmin";
import Sidebar from "@/components/dashboard/sidebar/sideBar";
import HeaderStats from "@/components/dashboard/headers/headerStats";
import AdminNavbar from "@/components/dashboard/navbar/adminNavBar";
import FooterTransfer from "@/components/dashboard/footers/footerTransfer";

function Transfer(){

    return(
        <>
        <Sidebar />
        <div className="relative md:ml-64 bg-red-600">
          <AdminNavbar />
          {/* Header */}
         
          <div className="px-4 md:px-10 mx-auto bg-red-600 w-full -m-24">
            <FooterTransfer/>
          </div>
        </div>
      </>
    )
}

export default Transfer