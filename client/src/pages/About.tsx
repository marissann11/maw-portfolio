import React from "react";
import NavComponent from "../components/Nav";
import me from "../assets/me.png";
import "./styles/about.scss";
import { FaLinkedin, FaGithub, FaStackOverflow } from "react-icons/fa";

export interface IAboutPageProps {}

const AboutPage: React.FunctionComponent<IAboutPageProps> = (props) => {
  return (
    <div>
      <NavComponent />
      <div className="about">
        <div className="aboutText">
          <h1>Hi, I'm Marissa!</h1>
          <p>
            This is a paragraph of text about me.
            <br />
            It will probably say things that I enjoy doing <br />
            Or things about my experience I don't know
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
  );
};

export default AboutPage;
