import React from "react";
import NavComponent from "../components/Nav";
import HomeComponent from "../components/HomeLink";
import me from "../assets/me.png";
import { FaLinkedin, FaGithub, FaStackOverflow } from "react-icons/fa";

export interface IAboutPageProps {}

const AboutPage: React.FunctionComponent<IAboutPageProps> = (props) => {
  return (
    <div>
      <NavComponent />
      <HomeComponent />
      <h1>About Me</h1>
      <p>
        This is a paragraph of text about me.
        <br />
        It will probably say things that I enjoy doing <br />
        Or things about my experience I don't know
      </p>
      <div>
        <img src={me} alt="me" />
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/marissa-wilhite-8700a4238/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/marissann11"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://stackoverflow.com/users/17353462/marissa"
          target="_blank"
          rel="noreferrer"
        >
          <FaStackOverflow />
        </a>
      </div>
    </div>
  );
};

export default AboutPage;
