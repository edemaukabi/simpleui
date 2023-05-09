import React from "react";
import { Link } from "react-router-dom";

export const Features = ({features}) => {
    return (
        <section className="features-section">
            <div className="features-title">
                <p> Features </p>
                <h2> Designed with everyone in mind </h2>
            </div>
            <div className="features-container">
                {features?.map((feature) => (
                    <div className="feature">
                        <div className="feature-icon">
                            <img src={feature.icon} alt={feature.title} />
                        </div>
                        <div className="feature-text">
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                            <Link className="hero-btn">Learn more</Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
                }
