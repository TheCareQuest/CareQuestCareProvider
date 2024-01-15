
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: menuOpened ? "-100%" : "0" };
    }
    return {};
  };

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        {/* Move the logo to the left */}
        <div className="logo">
          <Link to="/">
            <img src="./logoc.png" alt="logoc" width={120} />
          </Link>
        </div>

        <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <NavLink to="/">Homepage</NavLink>
            <NavLink to="/OurCampaigns">Create Campaigns</NavLink>
            <NavLink to="/Profile">Create Profile</NavLink>
            <NavLink to="">Notifications</NavLink>
            <NavLink to="/RequestPage">RequestPage</NavLink>
            <button className="buttonhd">Log In</button>
          </div>
        </OutsideClickHandler>

        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />|
        </div>
      </div>
    </section>
  );
};

export default Header;

