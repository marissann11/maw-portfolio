import React from "react";
import NavComponent from "../components/Nav";
import HomeComponent from "../components/HomeLink";
import { useSpring, animated } from "react-spring";
import ImageMapComponent from "../components/ImageMapComponent";

import "./styles/portfolio.scss";

export interface IPortfolioPageProps {}

const PortfolioPage: React.FunctionComponent<IPortfolioPageProps> = (props) => {
  const mainSpring = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  return (
    <animated.main style={mainSpring}>
      <NavComponent />
      <ImageMapComponent /> <HomeComponent />
    </animated.main>
  );
};

export default PortfolioPage;
