import React, { useRef, useState } from "react";
import "./style.css";

import Logo from "../../../assets/images/Main_Logo.svg\\\\\\\\\\";
import { ReactComponent as BellIcon } from "../../../assets/images/bell.svg";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@mui/material";

const NavBar = () => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);


const handleMenu = () => {
  setMenu(true);
};
  return (
    <>
      <nav >
        <div className="dashboard-nav">
          <div
            className="logo"
            // onClick={() => navigate(SUPER_ADMIN_DASHBOARD_PAGE)}
          >
            <img src={Logo} alt="logo" />
          </div>
          <div className="right-nav">
            <span
              style={{ display: "flex", alignItems: "center" }}
              id="admin-profile"
            >

      
              <div className="menu-box">
                <button className="hamburger-menu" onClick={handleMenu}>
                  ☰
                </button>
              </div>
            </span>
          </div>
        </div>
        <div
          id="overlay"
          style={{ display: menu.isMenuOpen ? "block" : "" }}
        ></div>
      </nav>
    </>
  );
};

export default NavBar;





