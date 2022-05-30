import React from "react";
import { Link } from "react-router-dom";

export interface IHomeComponentProps {}

const HomeComponent: React.FunctionComponent<IHomeComponentProps> = (props) => {
  const homeButton = `< Home / >`;

  return <Link to="/">{homeButton}</Link>;
};

export default HomeComponent;
