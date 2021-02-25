import React from "react";

interface Props {
  title: string;
  language: string;
  content: string;
}

export const CodeBlock = (props: Props) => {
  return (
    <fieldset className="box code-block">
      <legend>
        {props.title} ({props.language})
      </legend>
      <pre>{JSON.stringify(props.content, null, 2)}</pre>
    </fieldset>
  );
};
