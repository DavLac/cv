import React from "react";
import "../../translations/i18n";
import { Container, Grid } from "@material-ui/core";
import { Education } from "./education/Education";
import { Interests } from "./interests/Interests";

export const Other = () => {
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

            <Interests />

          </Grid>
        </Grid>
      </div>
    </Container>
  );
};