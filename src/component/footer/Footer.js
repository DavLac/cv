import React from "react";
import "../translations/i18n";
import packageJson from '../../../package.json';

export const Footer = () => {
    return (
        <footer>
            © Copyright David Lacoste 2021 - v{packageJson.version}
        </footer>
    );
};