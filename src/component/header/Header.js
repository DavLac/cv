import React from "react";
import {useTranslation} from "react-i18next";
import "../translations/i18n";
import {i18nFunction} from "../translations/i18n";
import i18n from "i18next";

import enFlag from "../translations/en-GB/en-flag.png";
import frFlag from "../translations/fr-FR/fr-flag.png";

const renderLangFlag = () => {
    switch (i18n.language) {
        case 'en':
            return (<img src={enFlag} alt="en flag"/>);
        case 'fr':
            return (<img src={frFlag} alt="fr flag"/>);
        default:
            return (<img src={enFlag} alt="en flag"/>);
    }
}

const handleSelectOnChange = (e) => {
    e.preventDefault();
    i18nFunction(e.target.value);
}

export const Header = () => {

    const {t} = useTranslation();

    return (
        <header>
            <div className="langSelection">
                {renderLangFlag()}
                <select name="language" id="en" onChange={handleSelectOnChange}>
                    <option value="en">English</option>
                    <option value="fr">Francais</option>
                </select>
            </div>

            <h1>{t('common:welcome')} <br/> DLacoste CV website</h1>
        </header>
    );
};