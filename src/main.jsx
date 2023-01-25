import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './index.css'

import HomePage from "./pages/home-page/homePage"
import AboutUs from "./pages/about-us/aboutUs"
import Events from "./pages/events/events"
import OutrSpace7 from './pages/events/outr-space/outrSpace7'
import Topic from './pages/events/outr-space/pages/topic'
import HowToJoin from './pages/events/outr-space/pages/howToJoin'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "about-us",
    element: <AboutUs />
  },
  {
    path: "events",
    element: <Events />,
  },
  {
    path: "events/outr-space-7",
    element: <OutrSpace7 />
  },
  {
    path: "/events/outr-space-7/topic",
    element: <Topic />
  },
  {
    path: "/events/outr-space-7/how-to-join",
    element: <HowToJoin />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
