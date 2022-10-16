import React from 'react';
import ReactDOM from 'react-dom/client';
import { App, APP_ROUTES } from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { RouteErrorPage } from "./pages/RouteErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <RouteErrorPage />,
    children: APP_ROUTES
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

