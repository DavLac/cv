import React from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDocker, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Paper } from "@material-ui/core";

const getIconByType = (type: string) => {
  switch (type) {
    case "GitHub":
      return <FontAwesomeIcon icon={faGithub} />;
    case "Docker Hub":
      return <FontAwesomeIcon icon={faDocker} />;
  }
};

const displayPetProjects = (petProjects: any) => {
  const jsx: any[] = [];

  petProjects.map((petProject: any) => {
      jsx.push(
        <Paper key={petProject.name}
               elevation={3}
               className={"pet-projects-list"}>
          <div className={"pet-project-icon"}>
            {getIconByType(petProject.name)}
          </div>
          <div className={"pet-project-details"}>
            <h2>{petProject.name}</h2>
            <p>{petProject.description}</p>
            <a href={petProject.url}>{petProject.link}</a>
          </div>
        </Paper>
      );
    }
  );

  return <div className={"pet-projects-content"}>{jsx}</div>;
};

export const PetProjects = () => {
  const { t } = useTranslation();

  const profileData: any = t("profileData:profile", { returnObjects: true });

  return (
    <div
      id={"anchor-pet-project"}
      className={"grid-item-custom"}>
      <h1>{t("common:petProjectTitle")}</h1>

      {displayPetProjects(profileData.other.petProjects)}
    </div>
  );
};