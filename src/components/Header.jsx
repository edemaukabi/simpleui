import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi'
import { Logo } from "./Logo";

export const Header = ({}) => {
    const [openSidemenu, setOpenSidemenu] = useState(false)
    const handleOpenClose = () => {}
  return (
    <header>
      <nav className="header-nav">
        <div>
          <Logo />
        </div>
        <div>
            <ul class="navbar-menu">
                <li>
                    <NavLink>Product</NavLink>
                </li>
                <li>
                    <NavLink>About us</NavLink>
                </li>
                <li>
                    <NavLink>Contact</NavLink>
                </li>
            </ul>
        </div>
        <button className="hamburger" onClick={handleOpenClose}>
            <GiHamburgerMenu size={"1.5rem"} />
        </button>
      </nav>
    </header>
  );
};
