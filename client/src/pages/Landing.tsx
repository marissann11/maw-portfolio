import React from "react";
import LandingNavComponent from "../components/LandingNav";
import "./styles/landing.scss";
import "../assets/background.png";

export interface ILandingPageProps {}

const LandingPage: React.FunctionComponent<ILandingPageProps> = (props) => {
  return (
    <div className="landing">
      <div className="text">
        <h1>Marissa Ann Wilhite</h1>
        <h2>Full Stack Developer</h2>
      </div>
      <LandingNavComponent />
    </div>
  );
};

export default LandingPage;
