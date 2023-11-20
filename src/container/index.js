import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/common/NavBar";
import SideBar from "../components/common/SideBar";

const DashboardLayout = () => {
  const handleClick = ()=>{
    console.log("handleclick")
  }
  return (
    <div className="admin-dashboard" onClick={handleClick}>
      <NavBar />
      <div
        className="main-dashboard"
      >
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
