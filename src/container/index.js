import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/common/NavBar";
import SideBar from "../components/common/SideBar";

const DashboardLayout = () => {
  return (
    <div className="admin-dashboard">
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
