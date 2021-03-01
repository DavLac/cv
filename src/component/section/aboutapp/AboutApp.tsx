import React from "react";
import "../../translations/i18n";
import { Container } from "@material-ui/core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoMaterialUi from "./img/logo-material-ui.png";
import logoReact from "./img/logo-react.png";
import logoTypescript from "./img/logo-typescript.png";
import logoSass from "./img/logo-sass.png";
import { useTranslation } from "react-i18next";

export const AboutApp = () => {
  const { t } = useTranslation();

  return (
    <Container
      id={"anchor-about-app"}
      maxWidth={false}
      className="container-custom container-dark">
      <h1 className="container-title">
        {t("common:aboutAppTitle")}
      </h1>

      <div className={"about-app-content"}>
        <p>
          {t("common:appGenerationDescription")} <a href={"https://github.com/facebook/create-react-app"}>Create React
          App</a>
        </p>

        <div className={"about-app-logos"}>
          <a href={"https://reactjs.org/"}>
            <img src={logoReact} alt={"logoReact"} />
          </a>
          <a href={"https://www.typescriptlang.org/"}>
            <img src={logoTypescript} alt={"logoTypescript"} />
          </a>
          <a href={"https://material-ui.com/"}>
            <img src={logoMaterialUi} alt={"logoMaterialUi"} />
          </a>
          <a href={"https://sass-lang.com/"}>
            <img src={logoSass} alt={"logoSass"} />
          </a>
        </div>

        <br />
        <p>
          {t("common:sourceCode")} :
        </p>
        <FontAwesomeIcon icon={faGithub} className={"about-app-icon"} />
        <br />
        <a href={"https://github.com/DavLac/cv"}>github.com/DavLac/cv</a>
        <br /><br />
        <p>
          {t("common:hostedOn")} <a href={"https://pages.github.com/"}>GitHub Pages</a>
        </p>
      </div>
    </Container>
  );
};