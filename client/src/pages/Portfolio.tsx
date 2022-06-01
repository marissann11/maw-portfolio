import React, { useState } from "react";
import NavComponent from "../components/Nav";
import HomeComponent from "../components/HomeLink";

import { useSpring, animated } from "react-spring";
import { ImageMap } from "@qiuz/react-image-map";
import { AreaType } from "./AreaType";

import portfolioImg from "../assets/portfolio.png";
import "./styles/portfolio.scss";

export interface IPortfolioPageProps {}

const mapArea: any[] = [
  {
    width: "7.494949494949496%",
    height: "12.966183574879228%",
    left: "12.878787878787879%",
    top: "11.787439613526569%",
  },
  {
    width: "7.449494949494949%",
    height: "11.594202898550725%",
    left: "40.14954229797979%",
    top: "8.212560386473431%",
  },
  {
    width: "7.7020202020202015%",
    height: "13.043478260869565%",
    left: "72.22024936868688%",
    top: "6.038647342995169%",
  },
  {
    width: "7.7020202020202015%",
    height: "13.768115942028986%",
    left: "18.432370580808087%",
    top: "78.50241545893721%",
  },
  {
    width: "8.080808080808081%",
    height: "13.526570048309178%",
    left: "77.77580492424242%",
    top: "72.70531400966183%",
  },
];

const onMapClick = (area: AreaType, index: number) => {
  const tip = `click map${area.href || index + 1}`;
  alert(tip);
};

const PortfolioPage: React.FunctionComponent<IPortfolioPageProps> = (props) => {
  // const [active, setActive] = useState(false);

  // const handleClick = (event: { preventDefault: () => void }) => {
  //   event.preventDefault();
  //   setActive((current) => !current);
  // };

  const ImageMapComponent = React.useMemo(
    () => (
      <ImageMap
        className="usage-map"
        src={portfolioImg}
        map={mapArea}
        onMapClick={onMapClick}
      />
    ),
    [portfolioImg]
  );

  const mainSpring = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  type Project = {
    name: string;
    image: string;
    description: string;
    github: string;
    site: string;
  };

  let projects: Project[];

  projects = [
    {
      name: "Sole Intentions v2",
      image: "sole-intentions2.png",
      description: "Mongoose, React.js, etc",
      github: "https://github.com/marissann11/sole-REACTions",
      site: "https://sole-intentions.herokuapp.com/",
    },
    {
      name: "Sole Intentions",
      image: "sole-intentions.png",
      description: "SQL, Handlebars, etc",
      github: "https://github.com/marissann11/sole-intentions-TMT",
      site: "https://soleintentions.herokuapp.com/",
    },
    {
      name: "Weather Dashboard",
      image: "weather.png",
      description: "technologies, etc",
      github: "https://github.com/marissann11/weather-dashboard-week6",
      site: "https://marissann11.github.io/weather-dashboard-week6/",
    },
    {
      name: "Password Generator",
      image: "password.png",
      description: "technologies, etc",
      github: "https://github.com/marissann11/password-generator",
      site: "https://marissann11.github.io/password-generator/",
    },
    {
      name: "Code Quiz",
      image: "quiz.png",
      description: "technologies, etc",
      github: "https://github.com/marissann11/code-quiz-week4-challenge",
      site: "https://marissann11.github.io/code-quiz-week4-challenge/",
    },
    {
      name: "Work Day Scheduler",
      image: "workday.png",
      description: "technologies, etc",
      github: "https://github.com/marissann11/work-day-scheduler-week5",
      site: "https://marissann11.github.io/work-day-scheduler-week5/",
    },
  ];

  return (
    <animated.main style={mainSpring}>
      <NavComponent />
      <div className="port">{ImageMapComponent}</div>
      <HomeComponent />
    </animated.main>
  );
};

export default PortfolioPage;
