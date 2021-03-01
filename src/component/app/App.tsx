import React from "react";
import "../../sass/main.scss";
import "../translations/i18n";
import { FabDownloadCv } from "../element/fabdownloadcv/FabDownloadCv";
import { DrawerApp } from "../drawer/DrawerApp";
import { Content } from "./Content";

export const App = () => {
  return (
    <div className="App">
      <DrawerApp />
      <Content />

      {/* fixed elements */}
      <FabDownloadCv />
    </div>
  );
}
