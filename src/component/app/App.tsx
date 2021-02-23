import React from "react";
import "../../sass/main.scss";
import { RawProfileData } from "../section/RawProfileData";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import "../translations/i18n";
import { Experiences } from "../section/Experiences";

// eslint-disable-next-line require-jsdoc
function App() {
  return (
    <div className="App">
      <Header />
      <Experiences />
      <RawProfileData />
      <Footer />
    </div>
  );
}

export default App;
