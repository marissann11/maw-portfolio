import React from "react";
import "./homelink.scss";
import { Link } from "react-router-dom";

import { BottomNavigation } from "@mui/material";

export interface IHomeComponentProps {}

const HomeComponent: React.FunctionComponent<IHomeComponentProps> = (props) => {
  const homeButton = `< Home / >`;

  return (
    <BottomNavigation className="homenav">
      <Link to="/">{homeButton}</Link>
    </BottomNavigation>
  );
};

export default HomeComponent;
