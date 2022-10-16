import React from "react";
import { Card } from "../components/Card";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { MarkDownEditor } from "../components/markdown-editor/MarkDownEditor";

const DRAFT_DATA = {
  title: "Draft Problem",
  body: "**Default Body**",
  input: "**Default Input**",
  output: "**Default Output**",
  notes: "**Default Notes**"
};

const FIELD_NAME = {
  title: "title",
  body: "body",
  input: "input",
  output: "output",
  notes: "notes"
};

export const DraftEditPage = () => {

  const { control, handleSubmit, register } = useForm();

  const onEditingDone = (data: FieldValues) => {
    console.log({data});
  };


  return (
    <section className="container">
      <Card title={DRAFT_DATA.title}>
        <form onSubmit={handleSubmit(onEditingDone)}>
          <div className="form-group">
            <label htmlFor={FIELD_NAME.title}>Title</label>
            <input className="form-control" type="text" {...register(FIELD_NAME.title)}
                   defaultValue={DRAFT_DATA.title} />
          </div>
          <div className="form-group">
            <label htmlFor={FIELD_NAME.body}>Body</label>
            <Controller control={control}
                        name={FIELD_NAME.body}
                        defaultValue={DRAFT_DATA.body}
                        render={
                          ({ field: { onChange, value } }) =>
                            <MarkDownEditor value={value} onChange={onChange} defaultValue={DRAFT_DATA.body} />
                        }
            />
          </div>
          <div className="form-group">
            <label htmlFor={FIELD_NAME.input}>Input</label>
            <Controller control={control}
                        name={FIELD_NAME.input}
                        defaultValue={DRAFT_DATA.input}
                        render={
                          ({ field: { onChange, value } }) =>
                            <MarkDownEditor value={value} onChange={onChange} defaultValue={DRAFT_DATA.input} />
                        }
            />
          </div>
          <div className="form-group">
            <label htmlFor={FIELD_NAME.output}>Output</label>
            <Controller control={control}
                        name={FIELD_NAME.output}
                        defaultValue={DRAFT_DATA.output}
                        render={
                          ({ field: { onChange, value } }) =>
                            <MarkDownEditor value={value} onChange={onChange} defaultValue={DRAFT_DATA.output} />
                        }
            />
          </div>
          <div className="form-group">
            <label htmlFor={FIELD_NAME.notes}>Notes</label>
            <Controller control={control}
                        name={FIELD_NAME.notes}
                        defaultValue={DRAFT_DATA.notes}
                        render={
                          ({ field: { onChange, value } }) =>
                            <MarkDownEditor value={value} onChange={onChange} defaultValue={DRAFT_DATA.notes} />
                        }
            />
          </div>
          <button className="btn btn-primary " type="submit">Save</button>
        </form>
      </Card>
    </section>
  );
};