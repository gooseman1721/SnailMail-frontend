import React from "react";
import ReactDOM from "react-dom/client";
import { FiefAuthProvider } from "@fief/fief/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "./index.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import IntroPage from "./routes/IntroPage";
import FrontPage from "./routes/FrontPage";
import BasicErrorPage from "./routes/BasicErrorPage";
import FiefCallback from "./routes/FiefCallback";
import ManageFriendsPage from "./routes/ManageFriendsPage";
import RequireAuth from "./components/RequireAuth";

import { createTheme } from "@mui/material";
import { blueGrey, grey, lightBlue, purple } from "@mui/material/colors";
import FrontPageCards from "./routes/FrontPageCards";
import ChatPage from "./routes/ChatPage";

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

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <IntroPage theme={theme} />,
    errorElement: <BasicErrorPage theme={theme} />,
  },
  {
    path: "main/",
    element: (
      <RequireAuth>
        <FrontPage theme={theme} />
      </RequireAuth>
    ),
    errorElement: <BasicErrorPage theme={theme} />,
    children: [
      {
        index: true,
        element: (
          <RequireAuth>
            <FrontPageCards />
          </RequireAuth>
        ),
      },
      {
        path: "chat/user/:userId",
        element: (
          <RequireAuth>
            <ChatPage />
          </RequireAuth>
        ),
      },
      {
        path: "chat/room/:roomId",
      },
      {
        path: "test/",
        element: <FrontPageCards />,
      },
    ],
  },
  {
    path: "callback/",
    element: <FiefCallback />,
    errorElement: <BasicErrorPage theme={theme} />,
  },
  {
    path: "main/friends/",
    element: (
      <RequireAuth>
        <ManageFriendsPage theme={theme} />
      </RequireAuth>
    ),
    errorElement: <BasicErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // React StrictMode renders twice, causing two
  // fief POST requests
  // <React.StrictMode>
  <FiefAuthProvider
    baseURL="http://localhost:9000"
    clientId="UtCBLTf_dnoShrys8WWnXuTgKq_L6Kjjj-if7CcmXno"
  >
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </FiefAuthProvider>
  // </React.StrictMode>
);
