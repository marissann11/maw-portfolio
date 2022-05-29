import React from "react";
import NavComponent from "../components/Nav";

export interface ISkillsPageProps {}

const SkillsPage: React.FunctionComponent<ISkillsPageProps> = (props) => {
  return (
    <div>
      <NavComponent />
      Skills Page
    </div>
  );
};

export default SkillsPage;
