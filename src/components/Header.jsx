import React, { useState } from "react";
import { NavLink, Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi'
import { Logo } from "./Logo";

export const Header = ({}) => {
    const [openSidemenu, setOpenSidemenu] = useState(false)
    const [activeClass, setActiveClass] = useState(false)
    
    const handleActiveClass = (e) => {
        e.target.classList.add('active-link');
    }
    const handleVerticalActiveClass = (e) => {
        e.target.classList.add('vertical-active-link');
    }
    const handleOpenClose = () => {
        if (openSidemenu) setOpenSidemenu(false)
        else setOpenSidemenu(true)
    }
  return (
    <header>
      <nav className="header-nav">
        <div>
          <Logo />
        </div>
        <div>
            <ul class="navbar-menu">
                <li>
                    <NavLink  className="nav-link active-link" onClick={handleActiveClass}>Product</NavLink>
                </li>
                <li>
                    <NavLink  className="nav-link" onClick={handleActiveClass}>About us</NavLink>
                </li>
                <li>
                    <NavLink  className="nav-link" onClick={handleActiveClass}>Contact</NavLink>
                </li>
            </ul>
        </div>
        <button className="hamburger" onClick={handleOpenClose}>
            <GiHamburgerMenu size={"1.5rem"} />
        </button>
      </nav>
      {openSidemenu && <nav class="vertical-nav">
      <ul class="vertical-navbar-menu">
                <li>
                    <NavLink  className="nav-link vertical-active-link" onClick={handleVerticalActiveClass}>Product</NavLink>
                </li>
                <li>
                    <NavLink  className="nav-link" onClick={handleVerticalActiveClass}>About us</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" onClick={handleVerticalActiveClass}>Contact</NavLink>
                </li>
            </ul>
      </nav>}
    </header>
  );
};
