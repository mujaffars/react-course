import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import Aboutus from './Component/Aboutus';
import DemoCarousel from './Component/DemoCarousel';
import UseEffectComp from './Component/UseEffectComp';
import * as ReactDOM from "react-dom/client";
import './carousel.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

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
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
