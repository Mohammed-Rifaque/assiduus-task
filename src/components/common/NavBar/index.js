import React from "react";
import "./style.css";
import Logo from "../../../assets/images/Main_Logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useDispatch, useSelector } from "react-redux";
import { activitySelector ,setMenu} from "../../../redux/slicers/activitySlice";

const NavBar = () => {
  const dispatch = useDispatch();
  const menuState = useSelector(activitySelector);
  const handleMenu = () => {
    dispatch(setMenu(true));
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
            <div className="menu-box">
              <button className="hamburger-menu" onClick={handleMenu}>
                ☰
              </button>
            </div>
            </div>
            </div>
            <div id="overlay" style={{ display: menuState.isMenuOpen ? "block" : "" }}></div>      </nav>
            </>
            );
};

export default NavBar;
