import React from "react";
import "../../translations/i18n";
import { Container, Grid } from "@material-ui/core";
import { Education } from "./education/Education";
import { Interests } from "./interests/Interests";
import { Languages } from "./languages/Languages";
import { PetProjects } from "./petprojects/PetProjects";

export const Other = () => {
  return (
    <Container maxWidth={false} className="container-custom container-light">
      <div className={"grid-container-custom"}>
        <Grid container spacing={8}>
          <Grid item xs={12} md={6}
                style={{ padding: "inherit" }}>
            <Education />
            <PetProjects />
          </Grid>
          <Grid item xs={12} md={6}
                style={{ padding: "inherit" }}>
            <Languages />
            <Interests />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};