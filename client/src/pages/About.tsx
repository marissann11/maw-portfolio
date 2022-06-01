import React from "react";
import NavComponent from "../components/Nav";
import me from "../assets/me.png";
import "./styles/about.scss";
import HomeComponent from "../components/HomeLink";
import { FaLinkedin, FaGithub, FaStackOverflow } from "react-icons/fa";
import { useSpring, animated } from "react-spring";

export interface IAboutPageProps {}

const AboutPage: React.FunctionComponent<IAboutPageProps> = (props) => {
  const mainSpring = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 800 },
  });

  return (
    <animated.main style={mainSpring}>
      <div>
        <NavComponent />
        <div className="about">
          <div className="aboutText">
            <h1>Hi, I'm Marissa!</h1>
            <p>
              I have a passion for back end development and never shy away from
              a <br />
              challenge. I believe that my work ethic alone can fill any <br />
              possible gaps in skill, and I can be a valuable asset to your
              team. <br /> <br /> I have created this portfolio in order to
              introduce myself to TypeScript and to improve upon <br /> where I
              feel I am weakest - CSS and frontend development as a whole.
              <br /> <br />
              Please feel free to visit my profiles below or reach out via my
              contact form. <br />
            </p>
            <div className="icons">
              <a
                href="https://www.linkedin.com/in/marissa-wilhite-8700a4238/"
                target="_blank"
                rel="noreferrer"
                className="icon"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/marissann11"
                target="_blank"
                rel="noreferrer"
                className="icon"
              >
                <FaGithub />
              </a>
              <a
                href="https://stackoverflow.com/users/17353462/marissa"
                target="_blank"
                rel="noreferrer"
                className="icon"
              >
                <FaStackOverflow />
              </a>
            </div>
          </div>
          <div className="img">
            <img src={me} alt="me" />
          </div>
        </div>
      </div>
      <HomeComponent />
    </animated.main>
  );
};

export default AboutPage;
