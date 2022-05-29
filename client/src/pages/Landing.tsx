import React from "react";
import NavComponent from "../components/Nav";

export interface ILandingPageProps {}

const LandingPage: React.FunctionComponent<ILandingPageProps> = (props) => {
  return (
    <div>
      <NavComponent />
      Landing Page
    </div>
  );
};

export default LandingPage;
