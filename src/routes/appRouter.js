import React from "react";
import Calendar from "../pages/Calendar";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "./Error";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Calendar />,
      },
    ],
    errorElement: <Error />,
  },
]);

export default appRouter;
