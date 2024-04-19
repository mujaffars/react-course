import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import Aboutus from './Component/Aboutus';
import Aboutus2 from './Component/Aboutus2';
import DemoCarousel from './Component/DemoCarousel';
import UseEffectComp from './Component/UseEffectComp';
import * as ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './carousel.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { useState } from 'react';
import Fetchitems from './Component/Fetchitems';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/hello",
    element: <Aboutus />,
  },
  {
    path: "/carousel",
    element: <DemoCarousel />,
  },
  {
    path: "/effect",
    element: <UseEffectComp />,
  },
  {
    path: "/about-us",
    element: <Aboutus />,
  },
  {
    path: "/aboutus",
    element: <Aboutus2 />,
  },
  {
    path: "/items-list",
    element: <Fetchitems />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
