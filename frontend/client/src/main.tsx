import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Clients from "./components/clients.component.tsx";
import HomePage from "./components/homepage.component.tsx";
import Login from "./components/login.component.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "homepage",
        element: <HomePage />,
      },
      {
        path: "homepage/clients",
        element: <Clients />,
      },
      {
        path: "homepage/login",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
