import React from "react";
import { Link } from "react-router-dom";

export const HeroSection = ({}) => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-text">
          <h1>
            Guaranteed to give you the best experience in
            <span> banking</span>
          </h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <Link className="hero-btn">Get Started</Link>
        </div>
      </div>
    </section>
  );
};
