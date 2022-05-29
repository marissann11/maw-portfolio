import React from "react";
import NavComponent from "../components/Nav";

export interface IAboutPageProps {}

const AboutPage: React.FunctionComponent<IAboutPageProps> = (props) => {
  return (
    <div>
      <NavComponent />
      About Page
    </div>
  );
};

export default AboutPage;
