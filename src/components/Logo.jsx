import React from "react";
import { Link } from "react-router-dom";

export const Logo = ({}) => {
  return (
    <div>
      <Link className="logo-container">
        <div>
          <div className="reactangle">
            <div className="outer-reactangle"></div>
            <div className="inner-reactangle"></div>
          </div>
        </div>
        <span className="logo-text">
          <span>Gravi</span>.ng
        </span>
      </Link>
    </div>
  );
};
