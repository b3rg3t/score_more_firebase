import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";

import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./router/routes";
import { IconContext } from "react-icons";

const rootElement = document.getElementById("root");

const router = createBrowserRouter(ROUTES);

const root = rootElement && ReactDOM.createRoot(rootElement);
root &&
  root.render(
    <React.StrictMode>
      <IconContext.Provider value={{}}>
        <RouterProvider router={router} />
      </IconContext.Provider>
    </React.StrictMode>
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
