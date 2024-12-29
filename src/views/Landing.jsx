import React from "react";
import "./Landing.css";
import useRainbowText from "../hooks/useRainbowText";
import useRedirectToHome from "../hooks/useRedirectToHome";
import libraryImage1 from "../assets/Library.webp";
import { useNavigate } from "react-router";


const Landing = () => {
  const rainbowText = useRainbowText("Welcome to Relatos de Papel");
  useRedirectToHome();

  const navigate = useNavigate();

  return (
    <>
      <div className="landing">
          <div className="landing__columns">
            <div className="landing__column">
              <img src={libraryImage1} alt="Library 1" />
            </div>
            <div className="landing__column landing__column--center">
              <h1 dangerouslySetInnerHTML={{ __html: rainbowText }} />
              <p>Your one-stop shop for all your book needs</p>
              <button className="landing__cta-button" onClick={() => navigate("/home")}>Shop Now</button>
            </div>
            <div className="landing__column">
              <img src={libraryImage1} alt="Library 2" />
            </div>
          </div>
      </div>
    </>
  );
};

export default Landing;
