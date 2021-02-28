import React from "react";
import "../../sass/main.scss";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import "../translations/i18n";
import { Experiences } from "../section/experience/Experiences";
import { AboutMe } from "../section/aboutme/AboutMe";
import { FabDownloadCv } from "../element/fabdownloadcv/FabDownloadCv";
import { Other } from "../section/other/Other";

// eslint-disable-next-line require-jsdoc
function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Experiences />
      <Other />
      <Footer />

      {/* fixed elements */}
      <FabDownloadCv />

    </div>
  );
}

export default App;
