import React from "react";
import NavComponent from "../components/Nav";

export interface ILandingPageProps {}

const LandingPage: React.FunctionComponent<ILandingPageProps> = (props) => {
  return (
    <div>
      <h1>Marissa Ann Wilhite</h1>
      <h2>Full Stack Developer</h2>
      <NavComponent />
    </div>
  );
};

export default LandingPage;
