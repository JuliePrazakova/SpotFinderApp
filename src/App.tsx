import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingSection from "./LandingPage/LandingSection";
import AdventuresPage from "./AdventuresPage/AdventuresPage";

export type IApplicationProps = Record<string, unknown>;

const Application: React.FunctionComponent<IApplicationProps> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingSection />} />
        <Route path="adventures">
          <Route index element={<AdventuresPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Application;
