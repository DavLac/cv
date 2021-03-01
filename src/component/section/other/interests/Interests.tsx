import React from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faGuitar, faPlaneDeparture, faQuestionCircle, faRunning } from "@fortawesome/free-solid-svg-icons";
import { InterestType } from "./InterestType";
import { CardIconText } from "../../../element/cardicontext/CardIconText";

const getIconByInterestType = (interestType: InterestType) => {
  switch (interestType) {
    case InterestType.MUSIC:
      return <FontAwesomeIcon icon={faGuitar} />;
    case InterestType.SPORT:
      return <FontAwesomeIcon icon={faRunning} />;
    case InterestType.CODING:
      return <FontAwesomeIcon icon={faCode} />;
    case InterestType.TRAVEL:
      return <FontAwesomeIcon icon={faPlaneDeparture} />;
    default:
      return <FontAwesomeIcon icon={faQuestionCircle} />;
  }
};

const displayInterests = (interests: any) => {
  const interestsJsx: any[] = [];

  interests.map((interest: any) =>
    interestsJsx.push(
      <CardIconText
        icon={getIconByInterestType(interest.type)}
        title={interest.typeName}
        description={interest.activity}
        key={interest.typeName} />
    )
  );

  return <div className={"interests-cards"}>{interestsJsx}</div>;
};

export const Interests = () => {
  const { t } = useTranslation();

  const profileData: any = t("profileData:profile", { returnObjects: true });

  return (
    <div
      id={"anchor-interests"}
      className={"grid-item-custom"}>
      <h1>{t("common:interestsTitle")}</h1>

      {displayInterests(profileData.other.interests)}

    </div>
  );
};