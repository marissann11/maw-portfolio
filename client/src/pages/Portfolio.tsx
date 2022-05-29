import React from "react";
import NavComponent from "../components/Nav";

export interface IPortfolioPageProps {}

const PortfolioPage: React.FunctionComponent<IPortfolioPageProps> = (props) => {
  return (
    <div>
      <NavComponent />
      Portfolio Page
    </div>
  );
};

export default PortfolioPage;
