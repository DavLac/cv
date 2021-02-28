import React from "react";
import { useTranslation } from "react-i18next";
import "../translations/i18n";
import { Container } from "@material-ui/core";
import { SelectLanguage } from "./language/SelectLanguage";
import GitHubIcon from "@material-ui/icons/GitHub";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDocker, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import BackgroundImgSmall from "./img/boreal-aurora-640x426.jpg";
import BackgroundImgMedium from "./img/boreal-aurora-1920x1279.jpg";
import BackgroundImgLarge from "./img/boreal-aurora-2400x1599.jpg";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const getBackgroundImgByMediaQueries = () => {
  const checkWidthSmall = isMediaQueryMatch("max-width:640px");
  const checkHeightSmall = isMediaQueryMatch("max-height:426px");

  const checkWidthMedium = isMediaQueryMatch("max-width:1920px");
  const checkHeightMedium = isMediaQueryMatch("max-height:1279px");

  if (checkWidthSmall === "true" && checkHeightSmall === "true") {
    return `${BackgroundImgSmall}`;
  }

  if (checkWidthMedium === "true" && checkHeightMedium === "true") {
    return `${BackgroundImgMedium}`;
  }

  return `${BackgroundImgLarge}`;
};

const isMediaQueryMatch = (rule: string) => {
  return `${useMediaQuery("(" + rule + ")")}`;
};

export const Header = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth={false}
               className="header-container"
               style={{
                 backgroundImage: `linear-gradient(to right bottom, 
                      rgba(11, 32, 27, 1) 25%, 
                      rgba(11, 32, 27, 0.75) 50%, 
                      rgba(11, 32, 27, 0) 75%), 
                      url(${getBackgroundImgByMediaQueries()})`
               }}
    >
      <SelectLanguage />

      <div>
        <h2>{t("common:welcome")}</h2>
        <h1>David LACOSTE</h1>
        <h3>Fullstack developer</h3>
        <div>
          <a href={"https://github.com/DavLac"}>
            <GitHubIcon className={"header-icons"} />
          </a>
          <a href={"https://hub.docker.com/u/davlac"}>
            <FontAwesomeIcon icon={faDocker} className={"header-icons"} />
          </a>
          <a href={"https://www.linkedin.com/in/david-lacoste-6a643b4b"}>
            <FontAwesomeIcon icon={faLinkedin} className={"header-icons"} />
          </a>
        </div>
      </div>
    </Container>
  );
};
