import React from "react";
import { Link } from "react-router-dom";

export interface IHomeComponentProps {}

const HomeComponent: React.FunctionComponent<IHomeComponentProps> = (props) => {
  return <Link to="/">Home</Link>;
};

export default HomeComponent;
