import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import LandingPage from "./pages/Landing";
import PortfolioPage from "./pages/Portfolio";
import SkillsPage from "./pages/Skills";

export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Application;
