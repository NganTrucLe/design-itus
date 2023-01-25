import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from './pages/home-page/homePage'
import AboutUs from './pages/about-us/aboutUs';
import Events from './pages/events/events';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />}/>
        </Routes>
        <Routes>
          <Route exact path="/about-us" element={<AboutUs />}/>
        </Routes>
        <Routes>
          <Route exact path="/events" element={<Events />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
