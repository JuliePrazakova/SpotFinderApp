import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingSection from "./LandingPage/LandingSection";
import AdventuresPage from "./AdventuresPage/AdventuresPage";
import "semantic-ui-css/semantic.min.css";

const Application: React.FunctionComponent = () => {
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
