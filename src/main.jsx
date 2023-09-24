import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root";
import Home from "./Components/Home/Home";
import Error from "./Components/Error/Error";
import Applied from "./Components/Applied/Applied";
import Statistic from "./Components/Statistic/Statistic";
import Details from "./Components/Details/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/applied",
        element: <Applied></Applied>,
        loader: () => fetch("jobs.json"),
      },
      {
        path: "/statistic",
        element: <Statistic></Statistic>,
      },
      {
        path: "/job/:id",
        element: <Details></Details>,
        loader: () => fetch("../jobs.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
