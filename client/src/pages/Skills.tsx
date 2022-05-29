import React from "react";
import HomeComponent from "../components/HomeLink";
import NavComponent from "../components/Nav";
import resumeImg from "../assets/resumeImg.png";

export interface ISkillsPageProps {}

const SkillsPage: React.FunctionComponent<ISkillsPageProps> = (props) => {
  return (
    <div>
      <NavComponent />
      <HomeComponent />
      <h1>Backend Technologies</h1>
      <h2>Frontend Technologies</h2>
      <h2>Deployment & Version Control</h2>
      <h3>What I'm learning ... </h3>
      <div>
        <h3>Download My Resume</h3>
        <img src={resumeImg} alt="screenshot of resume"></img>
      </div>
    </div>
  );
};

export default SkillsPage;
