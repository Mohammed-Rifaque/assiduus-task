import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

import { useState } from "react";
import { ReactComponent as DashboardIcon } from "../../../assets/images/Dashboard_Icon.svg";
import { ReactComponent as UserIcon } from "../../../assets/images/user.svg";
import { ReactComponent as WalletIcon } from "../../../assets/images/wallet.svg";
import { ReactComponent as FileIcon } from "../../../assets/images/file.svg";
import { ReactComponent as DollarIcon } from "../../../assets/images/dollar.svg";
import { ReactComponent as ContactsIcon } from "../../../assets/images/contacts-book.svg";

import {
    SUPER_ADMIN_DASHBOARD_PAGE,
} from "../../../config/constant/routePathConstants";
import { useDispatch, useSelector } from "react-redux";
import { activitySelector ,setMenu} from "../../../redux/slicers/activitySlice";


const SideBar = () => {
    const dispatch = useDispatch();
    const menuState = useSelector(activitySelector);
  
    const [activeTab, setActiveTab] = useState("dashboard");

    const sidebarItems = [
        {
            label: "Dashboard",
            slug: "dashboard",
            icon: <DashboardIcon />,
            path: SUPER_ADMIN_DASHBOARD_PAGE,
        },
        {
            label: "Accounts",
            slug: "accounts",
            icon: <WalletIcon />,
            path: "",
        },
        {
            label: "Payroll",
            slug: "payroll",
            icon: <DollarIcon />,
            path: "",
        },
        {
            label: "Reports",
            slug: "reports",
            icon: <FileIcon />,
            path: "",
        },
        {
            label: "Advisor",
            slug: "advisor",
            icon: <UserIcon />,
            path: "",
        },
        {
            label: "Contacts",
            slug: "contacts",
            icon: <ContactsIcon />,
            path: "",
        },
    ];
    const handleMenuClose = () => {
        dispatch(setMenu(false));
    };

    const handleMenuClick = (slug) => {
        setActiveTab(slug);
    };

    return (
        <div
            className={`dashboard-leftsidebar ${menuState.isMenuOpen ? "show" : ""
                }`}>           
                <div className="menu-box" style={{ float: "right", marginTop: "20px" }}>
                <button className="hamburger-menu" onClick={handleMenuClose}>
                  ✖
                </button>
              </div>
                <ul>
                {sidebarItems?.map(
                    ({ label, icon, path, slug }) => (
                        <li
                            key={label}
                            className={activeTab === slug ? "active-main" : ""}
                            id={"menu-list-item-" + slug}
                            onClick={() => handleMenuClick(slug)}
                        >
                            <Link to={path}>
                                <span>{icon}</span>
                                {label}
                            </Link>
                        </li>
                    )
                )}
            </ul>
        </div>
    )
};

export default SideBar;
