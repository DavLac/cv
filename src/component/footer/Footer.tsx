import React from "react";
import "../translations/i18n";
import packageJson from "../../../package.json";
import { Container } from "@material-ui/core";

export const Footer = () => {
  return (
    <Container maxWidth={false} className={"container-custom footer-container container-light"}>
      © Copyright <strong>David Lacoste</strong> 2021 - current version :{" "}
      {packageJson.version}
    </Container>
  );
};
