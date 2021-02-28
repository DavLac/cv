import React from "react";
import { useTranslation } from "react-i18next";

const displayLanguages = (languages: any) => {
  const interestsJsx: any[] = [];

  languages.map((language: any) => {
      interestsJsx.push(
        <div className={"language-name"}>{language.language}</div>
      );
      interestsJsx.push(
        <div className={"language-progress-bar"}>
          <progress className="progress is-primary is-small"
                    value={language.levelPourcentage}
                    max="100">
            {language.levelPourcentage}%
          </progress>
        </div>
      );
      interestsJsx.push(
        <div className={"language-level"}>{language.level}</div>
      );
    }
  );

  return <div className={"languages-div"}>{interestsJsx}</div>;
};

export const Languages = () => {
  const { t } = useTranslation();

  const profileData: any = t("profileData:profile", { returnObjects: true });

  return (
    <div className={"grid-item-custom"}>
      <h1>{t("common:languagesTitle")}</h1>

      {displayLanguages(profileData.other.languages)}

    </div>
  );
};