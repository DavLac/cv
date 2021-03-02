import React from "react";
import "../../sass/main.scss";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import "../translations/i18n";
import { Experiences } from "../section/experience/Experiences";
import { AboutMe } from "../section/aboutme/AboutMe";
import { Other } from "../section/other/Other";
import { AboutApp } from "../section/aboutapp/AboutApp";
import { ScrollToTop } from "../element/scrolltop/ScrollToTop";

export const Content = () => {
  return (
    <div>
      <Header />
      <AboutMe />
      <Experiences />
      <Other />
      <AboutApp />
      <Footer />

      <ScrollToTop />
    </div>
  );
};
