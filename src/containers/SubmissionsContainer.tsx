import React from "react";
import { Card } from "../components/Card";
import { SubmissionItem } from "../components/SubmissionItem";
import { SubmissionStates } from "../models/enums/SubmissionStates";

export const SubmissionsContainer = () => {
  return (
    <Card className="mt-3 submissions-container" title="Recent Submissions">
      <SubmissionItem date="13/JUN/2022" state={SubmissionStates.ACCEPTED} />
      <SubmissionItem date="12/JUN/2022" state={SubmissionStates.PENDING} />
      <SubmissionItem date="11/JUN/2022" state={SubmissionStates.REJECTED} />
    </Card>
  )
}