import React from "react";
import "../../sass/main.scss";
import "../translations/i18n";
import { FabDownloadCv } from "../element/fabdownloadcv/FabDownloadCv";
import { DrawerApp } from "../drawer/DrawerApp";
import { Header } from "../header/Header";
import { AboutMe } from "../section/aboutme/AboutMe";
import { Experiences } from "../section/experience/Experiences";
import { Other } from "../section/other/Other";
import { ContactAndAboutApp } from "../section/contactaboutapp/ContactAndAboutApp";
import { Footer } from "../footer/Footer";
import { ScrollToTop } from "../element/scrolltop/ScrollToTop";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Experiences />
      <Other />
      <ContactAndAboutApp />
      <Footer />

      {/* fixed elements */}
      <DrawerApp />
      <ScrollToTop />
      <FabDownloadCv />
    </div>
  );
};
