import React from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDocker, faGithub, faNpm } from "@fortawesome/free-brands-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Paper } from "@material-ui/core";
import { ModalInfo } from "../../../element/modal/ModalInfo";
import { PetProjectType } from "./PetProjectType";
import { PetProjectName } from "./PetProjectName";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";

const getIconByType = (type: PetProjectName) => {
  switch (type) {
    case PetProjectName.MANAGE_ITEMS:
      return <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />;
    case PetProjectName.GITHUB:
      return <FontAwesomeIcon icon={faGithub} />;
    case PetProjectName.DOCKER:
      return <FontAwesomeIcon icon={faDocker} />;
    case PetProjectName.NPM:
      return <FontAwesomeIcon icon={faNpm} />;
    default:
      return <FontAwesomeIcon icon={faQuestionCircle} />;
  }
};

const displayProjectDetail = (projectName: PetProjectName) => {
  if (projectName === PetProjectName.MANAGE_ITEMS) {
    return <p>Details of my last project</p>
  }

  return <React.Fragment />
}

const displayDetailLink = (petProject: any) => {
  const { t } = useTranslation();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (petProject.type === PetProjectType.SIMPLE_LINK) {
    return <a href={petProject.url}>{petProject.link}</a>;
  }

  return <span>
      <a onClick={handleOpen}>
        {t("common:getMoreDetails")}
      </a>

      <ModalInfo
        title={"My last project"}
        handleClose={handleClose}
        open={open}
      >
        {displayProjectDetail(petProject.id)}
      </ModalInfo>
    </span>;
};

const displayPetProjects = (petProjects: any) => {
  const jsx: any[] = [];

  petProjects.map((petProject: any) => {
      jsx.push(
        <Paper key={petProject.name}
               elevation={3}
               className={"pet-projects-list"}>
          <div className={"pet-project-icon"}>
            {getIconByType(petProject.id)}
          </div>
          <div className={"pet-project-details"}>
            <h2>{petProject.name}</h2>
            <p>{petProject.description}</p>
            {displayDetailLink(petProject)}
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
