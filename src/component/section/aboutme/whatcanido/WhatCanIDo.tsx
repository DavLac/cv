import React from "react";
import FormatPaintIcon from "@material-ui/icons/FormatPaint";
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import ViewComfyIcon from "@material-ui/icons/ViewComfy";
import LoopIcon from "@material-ui/icons/Loop";
import { CardIcon } from "../../../element/cardicon/CardIcon";
import { useTranslation } from "react-i18next";

export const WhatCanIDo = () => {
  const { t } = useTranslation();

  return (
    <div className={"grid-item-custom"}>
      <h1 id={"anchor-whatcanido"}>{t("common:whatCanIDoTitle")}</h1>

      <div className={"whatcanido-card-icons"}>
        <CardIcon icon={<FormatPaintIcon className={"card-icon--icon"} />}
                  subtitle={"Frontend"} />
        <CardIcon icon={<SettingsApplicationsIcon className={"card-icon--icon"} />}
                  subtitle={"Backend"} />
        <CardIcon icon={<ViewComfyIcon className={"card-icon--icon"} />}
                  subtitle={"Microservices"} />
        <CardIcon icon={<LoopIcon className={"card-icon--icon"} />}
                  subtitle={"DevOps"} />
      </div>

    </div>
  );
};