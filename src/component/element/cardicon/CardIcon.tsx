import React from "react";

interface Props {
  icon: any;
  subtitle: string;
}

export const CardIcon = (props: Props) => {
  return (
    <div className={"card-icon"}>
      {props.icon}
      <p>{props.subtitle}</p>
    </div>
  );
};