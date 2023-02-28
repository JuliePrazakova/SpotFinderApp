import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingSection from "./pages/landing-page/landing-section";
import AdventuresPage from "./pages/adventures-page/adventures-page";
import "semantic-ui-css/semantic.min.css";
import paths from "./utilities/pathnames";

const Application: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={paths.home.path} element={<LandingSection />} />
        <Route path={paths.adventures.path} element={<AdventuresPage />} />
        <Route
          path={paths["adventure-detail"].path}
          element={<AdventuresPage />}
        />
        {/* <Route path={paths.contact.path} element={} />
        <Route path={paths.signIn.path} element={} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Application;
