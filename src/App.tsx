import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingSection from "./LandingPage/LandingSection";
import TourSection from "./TourPage/TourSection";

export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
    return (
        <BrowserRouter>
            <Routes>

                <Route path='/' element={<LandingSection />}/>
                <Route path="tours">
                    <Route index element={<LandingSection />} />
                    <Route path=":id" element={<TourSection />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Application;