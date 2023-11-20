import React, { useState } from "react";
import "./style.css";
import Logo from "../../../assets/images/Main_Logo.svg";

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
            <span style={{ display: "flex", alignItems: "center" }} id="admin-profile">
              <div className="menu-box">
                <button className="hamburger-menu" onClick={handleMenu}>
                  ☰
                </button>
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
