import React from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "./Logo";

export const Header = ({}) => {
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
      </nav>
    </header>
  );
};
