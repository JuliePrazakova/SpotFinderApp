import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingSection from "./pages/landing-page/landing-section";
import AdventuresPage from "./pages/adventures-page/adventures-page";
import Adventure from "./pages/adventures-page/adventure";
import MapPage from "./pages/map-page/map-page";
import "semantic-ui-css/semantic.min.css";
import paths from "./utilities/pathnames";
import Profile from "./pages/login-components/profile-page";
import AdminPage from "./pages/admin-page/admin-page";

const Application: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={paths.home.path} element={<LandingSection />} />
        <Route path={paths.adventures.path} element={<AdventuresPage />} />
        <Route path={paths["adventure-detail"].path} element={<Adventure />} />
        <Route path={paths.search.path} element={<MapPage />} />
        <Route path={paths.profile.path} element={<Profile />} />
        <Route path={paths.admin.path} element={<AdminPage />} />
        <Route path={paths["order-detail"].path} element={<AdminPage />} />
        <Route path={paths["company-detail"].path} element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Application;
