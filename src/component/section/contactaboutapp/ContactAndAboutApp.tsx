import React from "react";
import "../../translations/i18n";
import { Container } from "@material-ui/core";
import { Contact } from "./contact/Contact";
import { AboutApp } from "./aboutapp/AboutApp";

export const ContactAndAboutApp = () => {
  return (
    <Container maxWidth={false} className="container-custom container-dark">
      <div className="container-contact-about-app">
        <Contact />
        <AboutApp />
      </div>
    </Container>
  );
};