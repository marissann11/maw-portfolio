import React from "react";
import NavComponent from "../components/Nav";
import HomeComponent from "../components/HomeLink";

export interface IContactPageProps {}

const ContactPage: React.FunctionComponent<IContactPageProps> = (props) => {
  return (
    <div>
      <NavComponent />
      <HomeComponent />
      Contact Page
    </div>
  );
};

export default ContactPage;
