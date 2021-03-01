import React from "react";
import "../../translations/i18n";
import { useTranslation } from "react-i18next";
import { Container, Grid } from "@material-ui/core";
import { Infos } from "./infos/Infos";
import { Skills } from "./skills/Skills";
import { WhatCanIDo } from "./whatcanido/WhatCanIDo";

export const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth={false} className="container-custom container-light">
      <h1 id={"anchor-infos"}
        className="container-title container-title-left aboutme-title">
        {t("common:aboutMeTitle")}
      </h1>

      <div className={"grid-container-custom"}>
        <Grid container spacing={8}>
          <Grid item xs={12} md={6}
                style={{ padding: "inherit" }}>
            <Infos />
          </Grid>
          <Grid item xs={12} md={6}
                style={{ padding: "inherit" }}>
            <WhatCanIDo />
            <Skills />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};