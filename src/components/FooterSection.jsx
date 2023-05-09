import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import facebookicon from "../assets/images/facebook.png"
import instagramlogo from "../assets/images/instagram-logo.png"
import twitterlogo from "../assets/images/twitter.png"


export const FooterSection = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">

        <div className="footer-section">
          <Logo />
        </div>

        <div className="footer-section">
          <div className="footer-section-title">
            <h3>Get Started</h3>
            <ul>
              <li>
                <Link>Documentation</Link>
              </li>
              <li>
                <Link>Pricing</Link>
              </li>
              <li>
                <Link>Tutorials</Link>
              </li>
              <li>
                <Link>Guide</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-section">
          <div className="footer-section-title">
            <h3>Platforms</h3>
            <ul>
              <li>
                <Link>Available on iOS</Link>
              </li>
              <li>
                <Link>Available on Android</Link>
              </li>
              <li>
                <Link>Available on the Web</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-section">
          <div className="footer-section-title">
            <h3>Newsletter</h3>
            <ul>
              <li>
                <p>Get curated content and design inspiration delivered straight to your inbox. Learn more</p>
                <Link>Learn more</Link>
              </li>
              
              <li>
                <div className="footer-submit">
                    <input type="text" placeholder="Your Email" />
                    <button className="footer-btn">Submit</button>
                </div>
              </li>
    
            </ul>
          </div>
        </div>

      </div>
      <div className="footer-socials">
        <img src={instagramlogo} alt="" />
        <img src={facebookicon} alt="" />
        <img src={twitterlogo} alt="" />
      </div>

      <div className="copyright">
        <p>Copyright 2018. <span className="gravii">Gravii</span>.ng. All rights reserved</p>
      </div>
    </footer>
  );
};
