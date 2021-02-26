import React from "react";
import "../../sass/main.scss";
import { RawProfileData } from "../section/RawProfileData";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import "../translations/i18n";
import { Experiences } from "../section/Experiences";
import { AboutMe } from "../section/AboutMe";
import { FabDownloadCv } from "../element/FabDownloadCv";

// eslint-disable-next-line require-jsdoc
function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Experiences />
      <RawProfileData />
      <Footer />

      {/* fix elements */}
      <FabDownloadCv />

    </div>
  );
}

export default App;
