import React, { useMemo } from "react";
import MDEditor, { commands, ICommand, MarkdownUtil } from "@uiw/react-md-editor";
import katex from "katex";
import "katex/dist/katex.css";
import { TbMath } from "react-icons/tb";
import "./MarkDownEditor.scss";

type MarkDownEditorProps = {
  value: string;
  defaultValue?: string;
  onChange: (value?: string) => void;
}

export const MarkDownEditor = (props: MarkDownEditorProps) => {
  const {value, defaultValue, onChange} = props;

  const mathCommand : ICommand = useMemo(() => {
    return {
      name: 'math',
      keyCommand: 'math',
      shortcuts: 'ctrlcmd+m',
      value: '`$$ $$`',
      buttonProps: { 'aria-label': 'Add math formula (ctrl + m)', title: 'Add math formula (ctrl + m)' },
      icon: <TbMath />,
      execute: (state: any, api: any) => {
        // Adjust the selection to encompass the whole word if the caret is inside one
        const newSelectionRange = MarkdownUtil.selectWord({ text: state.text, selection: state.selection });
        const state1 = api.setSelectionRange(newSelectionRange);
        // Replaces the current selection with the italic mark up
        const state2 = api.replaceSelection(`\`$$${state1.selectedText}$$\``);
        // Adjust the selection to not contain the *
        api.setSelectionRange({
          start: state2.selection.end - 3 - state1.selectedText.length,
          end: state2.selection.end - 3,
        });
      },
    }
  }, [])

  const previewOptions = useMemo(() => {
    return {
      className: 'markdown-preview',
      components: {
        code: (props: any) => {
          const txt = props.children ? props.children[0] : "";
          if (typeof txt === "string" && /^\$\$(.*)\$\$/.test(txt)) {
            const html = katex.renderToString(
              txt.replace(/^\$\$(.*)\$\$/, "$1"),
              {
                throwOnError: false
              }
            );
            return <code className="custom-math-formula" dangerouslySetInnerHTML={{ __html: html }} />;
          }
          return <code>{txt}</code>;
        }
      }
    };
  }, []);

  return (
      <MDEditor height={300}
                defaultValue={defaultValue}
                value={value}
                onChange={onChange}
                previewOptions={previewOptions}
                commands={[...commands.getCommands() , mathCommand]}
      />
  );
};