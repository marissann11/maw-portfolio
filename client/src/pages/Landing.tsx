import React from "react";
import LandingNavComponent from "../components/LandingNav";
import { useSpring, animated } from "react-spring";
import { ImageMap } from "@qiuz/react-image-map";
import { AreaType } from "./AreaType";

import "./styles/landing.scss";
import backgroundImg from "../assets/background.png";

const mapArea: any[] = [
  {
    width: "5.284644194756544%",
    height: "9.85867237687366%",
    left: "15.730337078651685%",
    top: "12.505353319057816%",
  },
  {
    width: "5.2434456928838955%",
    height: "8.351177730192722%",
    left: "26.669787765293385%",
    top: "25.053533190578158%",
  },
  {
    width: "5.742821473158552%",
    height: "8.993576017130621%",
    left: "42.2752808988764%",
    top: "8.993576017130621%",
  },
  {
    width: "5.617977528089887%",
    height: "8.56531049250535%",
    left: "73.73595505617976%",
    top: "7.922912205567452%",
  },
  {
    width: "5.742821473158552%",
    height: "8.137044967880087%",
    left: "79.35393258426964%",
    top: "12.419700214132762%",
  },
  {
    width: "6.242197253433209%",
    height: "8.993576017130621%",
    left: "9.691011235955056%",
    top: "82.65524625267666%",
  },
  {
    width: "5.2434456928838955%",
    height: "8.35117773019272%",
    left: "21.426342072409486%",
    top: "71.94860813704497%",
  },
  {
    width: "4.868913857677903%",
    height: "9.850107066381156%",
    left: "32.03807740324594%",
    top: "82.01284796573876%",
  },
  {
    width: "5.493133583021224%",
    height: "8.779443254817988%",
    left: "79.35393258426966%",
    top: "66.3811563169165%",
  },
  {
    width: "5.867665418227216%",
    height: "10.492505353319057%",
    left: "63.74843945068665%",
    top: "82.44111349036403%",
  },
];
const onMapClick = (area: AreaType, index: number) => {
  const tip = `click map${area.href || index + 1}`;
  alert(tip);
};

export interface ILandingPageProps {}

const LandingPage: React.FunctionComponent<ILandingPageProps> = (props) => {
  const ImageMapComponent = React.useMemo(
    () => (
      <ImageMap
        className="usage-map"
        src={backgroundImg}
        map={mapArea}
        onMapClick={onMapClick}
      />
    ),
    [backgroundImg]
  );

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
