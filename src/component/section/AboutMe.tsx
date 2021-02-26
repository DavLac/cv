import React from "react";
import "../translations/i18n";
import { useTranslation } from "react-i18next";
import { Container, Grid, Typography } from "@material-ui/core";

export const AboutMe = () => {
  const { t } = useTranslation();

  const profileData: any = t("profileData:profile", { returnObjects: true });

  return (
    <Container maxWidth={false} className="container-custom">
      <h1 className="container-title aboutme-title">
        {t("common:aboutMeTitle")}
      </h1>

      <div className={"aboutme-grid"}>
        <Grid container spacing={8}>
          <Grid item xs={12} sm={6}>
            <Typography>
              {profileData.generalInformations}
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography>
              {profileData.generalInformations}
            </Typography>
          </Grid>
        </Grid>
      </div>

    </Container>
  );
};