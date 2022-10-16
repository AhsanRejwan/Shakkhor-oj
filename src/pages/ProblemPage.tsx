import React from "react";
import { ProblemStatementContainer } from "../containers/ProblemStatementContainer";
import { SubmitContainer } from "../containers/SubmitContainer";
import { SubmissionsContainer } from "../containers/SubmissionsContainer";

export const ProblemPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-9">
          <ProblemStatementContainer />
        </div>
        <div className="col-12 col-lg-3">
          <SubmitContainer />
          <SubmissionsContainer />
        </div>
      </div>
    </div>
  )
}