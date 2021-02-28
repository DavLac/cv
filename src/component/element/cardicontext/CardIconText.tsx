import React from "react";

interface Props {
  icon: any;
  title: string;
  description: string;
}

export const CardIconText = (props: Props) => {
  return (
    <div className={"card-icon-text"}>
      <div className={"card-icon-text--title-section"}>
        <div className={"card-icon-text--icon"}>
          {props.icon}
        </div>
        <h2>{props.title}</h2>
      </div>

      <div className={"card-icon-text--description"}>{props.description}</div>
    </div>
  );
};