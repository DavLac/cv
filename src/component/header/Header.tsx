import React from "react";
import { useTranslation } from "react-i18next";
import "../translations/i18n";
import { Container, Typography } from "@material-ui/core";
import { SelectLanguage } from "./SelectLanguage";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";

export const Header = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth={false}
               className="header-container">

      <SelectLanguage />

      <Typography>
        <h2>{t("common:welcome")}</h2>
        <h1>David LACOSTE</h1>
        <h3>Fullstack developer</h3>
        <div>
          <GitHubIcon className={"header-icons"} />
          <LinkedInIcon className={"header-icons"} />
          <FacebookIcon className={"header-icons"} />
          <TwitterIcon className={"header-icons"} />
          <YouTubeIcon className={"header-icons"} />
        </div>
      </Typography>

    </Container>
  );
};