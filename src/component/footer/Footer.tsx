import React from "react";
import "../translations/i18n";
import packageJson from "../../../package.json";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          © Copyright <strong>David Lacoste</strong> 2021 - v
          {packageJson.version}
        </p>
      </div>
    </footer>
  );
};
