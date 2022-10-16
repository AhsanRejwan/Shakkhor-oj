import React from "react";
import { SubmissionStates } from "../models/enums/SubmissionStates";
import './SubmissionItem.scss'

type SubmissionItemProps = {
  date: string;
  state: SubmissionStates;
}

export const SubmissionItem = (props: SubmissionItemProps) => {
  const {date, state} = props;
  return (
    <div className="py-2 submission-item border-bottom d-flex justify-content-between align-items-center">
      <button className="btn btn-link pl-0"> 19/Jun/2022</button>
      <span className={state.toLowerCase()}>{state[0] + state.substring(1).toLowerCase()}</span>
    </div>
  )
}