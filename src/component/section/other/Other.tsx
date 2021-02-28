import React from "react";
import "../../translations/i18n";
import { Container, Grid } from "@material-ui/core";
import { Education } from "./education/Education";
// import { useTranslation } from "react-i18next";

export const Other = () => {
  // const { t } = useTranslation();

  return (
    <Container maxWidth={false} className="container-custom container-light">
      <div className={"grid-container-custom"}>
        <Grid container spacing={8}>
          <Grid item xs={12} md={6}
                style={{ padding: "inherit" }}>
            <Education />
          </Grid>
          <Grid item xs={12} md={6}
                style={{ padding: "inherit" }}>

            {/* OTHER */}
            <div className={"grid-item-custom"}>
              <h1>LANGUAGE</h1>
              <p>content</p>
            </div>

            <div className={"grid-item-custom"}>
              <h1>INTERESTS</h1>
              <p>content</p>
            </div>

          </Grid>
        </Grid>
      </div>
    </Container>
  );
};