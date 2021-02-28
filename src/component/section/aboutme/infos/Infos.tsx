import React from "react";
import "../../../translations/i18n";
import { useTranslation } from "react-i18next";
import { Typography } from "@material-ui/core";

const calculateAge = (birthday: string): number => {
  const ageDiff = Date.now() - new Date(birthday).getTime();
  const ageDate = new Date(ageDiff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

const displayInfos = (infoFields: any) => {
  const elementsJsx: any[] = [];

  infoFields.map((infoField: any) => {
    elementsJsx.push(
      <li key={infoField.field}>
        <span style={{ display: "inline-block" }}>
          <span className={"infos-field"}>{infoField.field}</span>
          <span className={"infos-points-separator"}> :</span>
        </span>
        <span className={"infos-value"}>{infoField.value}</span>
      </li>
    );
  });

  return (
    <ul>
      {elementsJsx}
    </ul>
  );
};

export const Infos = () => {
  const { t } = useTranslation();

  const profileData: any = t("profileData:profile", { returnObjects: true });

  const infoFields = [
    {
      field: t("common:fieldName"),
      value: profileData.firstname + " " + profileData.surname
    },
    {
      field: t("common:fieldEmail"),
      value: profileData.mail
    },
    {
      field: t("common:fieldCurrentLocation"),
      value: profileData.currentLocation.city + " / " +
        profileData.currentLocation.country
    },
    {
      field: t("common:fieldNationality"),
      value: profileData.nationality
    },
    {
      field: t("common:fieldAge"),
      value: calculateAge(profileData.birthdayDate)
    },
    {
      field: t("common:fieldStatus"),
      value: profileData.status
    }
  ];

  return (
    <div className={"grid-item-custom"}>
      <p className={"infos-quick-intro"}>
        {profileData.quickIntro}
      </p>
      <Typography className={"infos-text"}>
        {profileData.generalInformations}
      </Typography>
      {displayInfos(infoFields)}
    </div>
  );
};