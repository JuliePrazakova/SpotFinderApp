import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingSection from './LandingPage/LandingSection'

export type IApplicationProps = Record<string, unknown>

const Application: React.FunctionComponent<IApplicationProps> = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LandingSection />}/>
                <Route path="tours">
                    <Route index element={<LandingSection />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Application