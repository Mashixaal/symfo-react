// start the Stimulus application
// import './bootstrap';

import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./src/pages/home";
import Contact from "./src/pages/contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  }
]);

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<RouterProvider router={router} />)