import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import IntroPage from "./routes/IntroPage";
import BasicErrorPage from "./routes/BasicErrorPage";

import { createTheme } from "@mui/material";
import { blueGrey, grey, lightBlue, purple } from "@mui/material/colors";
import FrontPage from "./routes/FrontPage";

const theme = createTheme({
  palette: {
    primary: {
      main: blueGrey[500],
      light: blueGrey[400],
    },
    secondary: {
      main: purple[200],
    },
    background: {
      default: "#fafafa",
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <IntroPage theme={theme} />,
    errorElement: <BasicErrorPage theme={theme} />,
  },
  {
    path: "main/",
    element: <FrontPage theme={theme} />,
    errorElement: <BasicErrorPage theme={theme} />,
  },
]);

const backendBaseUrl = "http://127.0.0.1:8000";

async function postLoginRequest(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },

    body: new URLSearchParams({
      username: data.username,
      password: data.password,
    }),
  });
  return response.json();
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
