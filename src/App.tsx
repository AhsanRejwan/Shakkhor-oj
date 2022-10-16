import React, { Fragment } from "react";
import { ProblemPage } from "./pages/ProblemPage";
import "./App.scss";
import { Link, Outlet, RouteObject } from "react-router-dom";
import { ROUTES } from "./constants/Routes";
import { DraftPage } from "./pages/DraftPage";
import { DraftEditPage } from "./pages/DraftEditPage";

export const APP_ROUTES: RouteObject[] = [
  {
    path: "/",
    element: <div className="d-flex justify-content-center mt-5">Home Page</div>
  },
  {
    path: ROUTES.PROBLEM,
    element: <ProblemPage />
  },
  {
    path: ROUTES.DRAFT.home,
    element: <DraftPage />,
    children: [
      {
        path: ROUTES.DRAFT.statement,
        element: <div>draft statement page</div>
      },
      {
        path: ROUTES.DRAFT.edit,
        element: <DraftEditPage />
      }
    ]
  }
];

export const App = () => {

  return (
    <Fragment>
      <div className="bg-dark p-3 d-flex justify-content-center align-items-center mb-5">
        <Link to={ROUTES.DRAFT.home} className="mr-3">Drafts</Link>
        <Link to={ROUTES.PROBLEM}>Problems</Link>
      </div>
      <Outlet />
    </Fragment>
  );
};
