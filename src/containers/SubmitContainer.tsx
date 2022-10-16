import React from "react";
import { Card } from "../components/Card";
import { FieldValues, useForm } from "react-hook-form";

const FIELD_NAMES = {
  languageDropdown: "language",
  fileSubmission: "file"
};

export const SubmitContainer = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <Card className="mt-3 mt-lg-0 submit-container" title="Submit">
      <span>Choose a programming language and submit your solution file.</span>
      <form className={`mt-2`} onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <select
            className={`form-control ${errors[FIELD_NAMES.languageDropdown] ? "is-invalid" : ""}`} {...register(FIELD_NAMES.languageDropdown, {
            required: "Please Select a language"
          })}>
            <option value={123}>C++</option>
            <option value={13}>Java</option>
            <option value={12}>JavaScript</option>
            <option value={345}>Python</option>
          </select>
          {
            errors[FIELD_NAMES.languageDropdown] &&
            <div className="invalid-feedback">Please select a langooj</div>
          }
        </div>
        <div className="form-group">
          <input className={`form-control-file mt-3 ${errors[FIELD_NAMES.fileSubmission] ? "is-invalid" : ""}`}
                 type="file" {...register(FIELD_NAMES.fileSubmission, {
            required: "Please select a file"
          })} />
          {
            errors[FIELD_NAMES.fileSubmission] &&
            <div className="invalid-feedback">Please Submit a file</div>
          }
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </Card>
  );
};