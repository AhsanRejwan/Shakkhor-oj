import React from "react";
import { Link } from "react-router-dom";

export const RouteErrorPage = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center h-100">
      <div> Oops! Page not found</div>
      <Link className="btn btn-primary" to="/">Go Home</Link>
    </div>
  )
}