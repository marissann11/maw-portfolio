import React from "react";
import "./homelink.scss";
import { Link } from "react-router-dom";

import { BottomNavigation, styled } from "@mui/material";

export interface IHomeComponentProps {}

const HomeComponent: React.FunctionComponent<IHomeComponentProps> = (props) => {
  const CustomNav = styled(BottomNavigation)({
    backgroundColor: "#262729",
  }) as typeof BottomNavigation;

  const homeButton = `< Home / >`;

  return (
    <CustomNav>
      <Link to="/">{homeButton}</Link>
    </CustomNav>
  );
};

export default HomeComponent;
