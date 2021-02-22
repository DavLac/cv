import React from "react";
import "../../sass/main.scss";
import { Section } from "../section/Section";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import "../translations/i18n";

// eslint-disable-next-line require-jsdoc
function App() {
  return (
    <div className="App">
      <Header />
      <Section />
      <Footer />
    </div>
  );
}

export default App;
