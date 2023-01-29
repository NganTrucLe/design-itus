import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Footer from './components/footer'

import AboutUs from './pages/about-us/aboutUs'
import Events from './pages/events/events'
import OutrSpace7 from './pages/events/outr-space/outrSpace7'
import HowToJoin from './pages/events/outr-space/pages/howToJoin'
import Topic from './pages/events/outr-space/pages/topic'
import HomePage from './pages/home-page/homePage'

export default function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                </Routes>
                <Routes>
                    <Route exact path="/about-us" element={<AboutUs />} />
                </Routes>
                <Routes>
                    <Route exact path="/events" element={<Events />} />
                </Routes>
                <Routes>
                    <Route exact path="/events/outr-space-7" element={<OutrSpace7 />} />
                </Routes>
                <Routes>
                    <Route exact path="/events/outr-space-7/topic" element={<Topic />} />
                </Routes>
                <Routes>
                    <Route exact path="/events/outr-space-7/how-to-join" element={<HowToJoin />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    )
}
