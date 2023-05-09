import React from "react";
import { Link } from "react-router-dom";

export const Features = ({features}) => {
    return (
        <footer className="footer-section">
            {/* <div className="features-title">
                <p> Features </p>
                <h2> Designed with everyone in mind </h2>
            </div> */}
            <div className="footer-container">
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
                            <Link className="hero-btn">Learn more</Link>
                        </div>
                    </div>
            </div>
        </footer>
    );
                }
