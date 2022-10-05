import React from "react";
import ReactDOM from "react-dom/client";
import { FiefAuthProvider } from "@fief/fief/react";

import "./index.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import IntroPage from "./routes/IntroPage";
import FrontPage from "./routes/FrontPage";
import BasicErrorPage from "./routes/BasicErrorPage";
import FiefCallback from "./routes/FiefCallback";

import { createTheme } from "@mui/material";
import { blueGrey, grey, lightBlue, purple } from "@mui/material/colors";


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
  {
    path: "callback/",
    element: <FiefCallback />,
    errorElement: <BasicErrorPage theme={theme} />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FiefAuthProvider
      baseURL="http://localhost:9000"
      clientId="UtCBLTf_dnoShrys8WWnXuTgKq_L6Kjjj-if7CcmXno"
    >
      <RouterProvider router={router} />
    </FiefAuthProvider>
  </React.StrictMode>
);
