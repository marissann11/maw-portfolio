import React from "react";
import LandingNavComponent from "../components/LandingNav";
import { useSpring, animated } from "react-spring";

import "./styles/landing.scss";

export interface ILandingPageProps {}

const LandingPage: React.FunctionComponent<ILandingPageProps> = (props) => {
  const mainSpring = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  return (
    <animated.main style={mainSpring}>
      <div className="landing">
        <div className="text">
          <h1>Marissa Ann Wilhite</h1>
          <h2>Full Stack Developer</h2>
        </div>
        <LandingNavComponent />
      </div>
    </animated.main>
  );
};

export default LandingPage;
