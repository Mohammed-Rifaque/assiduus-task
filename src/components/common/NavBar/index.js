import React, { useState } from "react";
import "./style.css";
import Logo from "../../../assets/images/Main_Logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const NavBar = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <nav>
        <div className="dashboard-nav">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="right-nav">
            <span className="admin-profile" id="admin-profile">
              <div className="menu-box">
                <button className="hamburger-menu" onClick={handleMenu}>
                  ☰
                </button>
              </div>
              <div className="search-box">
                <SearchIcon />
                <input type="text" placeholder="Search" style={{ backgroundColor: "transparent", border: "none", color: "white", marginLeft: "5px" }} />
              </div>
              <div className="notification-box">
                <NotificationsIcon />
              </div>
              <div className="profile-box">
                <AccountCircleIcon />
              </div>
              <div className="down-arrow-box">
                <ArrowDropDownIcon />
              </div>
            </span>
          </div>
        </div>
        {menu && <div id="overlay"></div>}
      </nav>
    </>
  );
};

export default NavBar;
