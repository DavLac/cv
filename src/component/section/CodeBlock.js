import React from "react";

export const CodeBlock = (props) => {
    return (
            <fieldset className="box code-block">
                <legend>{props.title} ({props.language})</legend>
                <pre>
                    {JSON.stringify(props.content, null, 2)}
                </pre>
            </fieldset>
    );
};