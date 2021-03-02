import React from "react";
import "../translations/i18n";
import packageJson from "../../../package.json";
import { Container } from "@material-ui/core";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  const currentYear: number = new Date().getFullYear();

  return (
    <Container maxWidth={false} className={"container-custom footer-container"}>
      © Copyright <strong>David Lacoste</strong> {currentYear} -{" "}
      <span className={"footer-app-version"}>{t("common:currentVersion")} : {packageJson.version}</span>
    </Container>
  );
};
