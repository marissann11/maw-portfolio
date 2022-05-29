import React from "react";
import NavComponent from "../components/Nav";
import HomeComponent from "../components/HomeLink";

export interface IPortfolioPageProps {}

const PortfolioPage: React.FunctionComponent<IPortfolioPageProps> = (props) => {
  return (
    <div>
      <NavComponent />
      <HomeComponent />
      Portfolio Page
    </div>
  );
};

export default PortfolioPage;
