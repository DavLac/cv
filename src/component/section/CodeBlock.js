import React from "react";

export const CodeBlock = (props) => {
    return (
            <fieldset className="codeBlockContent">
                <legend>{props.title} ({props.language})</legend>
                <pre>
                    {JSON.stringify(props.content, null, 2)}
                </pre>
            </fieldset>
    );
};