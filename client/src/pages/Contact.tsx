import React from "react";
import NavComponent from "../components/Nav";

export interface IContactPageProps {}

const ContactPage: React.FunctionComponent<IContactPageProps> = (props) => {
  return (
    <div>
      <NavComponent />
      Contact Page
    </div>
  );
};

export default ContactPage;
