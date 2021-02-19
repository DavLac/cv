import React from "react";
import {useTranslation} from "react-i18next";
import ".././translations/i18n";
import i18n from "i18next";
import enFlag from '.././translations/en-EN/en-flag.png';
import frFlag from '.././translations/fr-FR/fr-flag.png';

let flag = () => {
    if (i18n.language === 'en') {
        return (
            <img src={enFlag} alt="en flag" width='50' height='25'/>
        );
    }

    if (i18n.language === 'fr') {
        return (
            <img src={frFlag} alt="fr flag" width='50' height='25'/>
        );
    }
}

export const Content = () => {
    const {t} = useTranslation();

    return (
        <div>
            <h2>Dav Lac CV {flag()}</h2>
            <pre>
                {
                    JSON.stringify(
                        t('profile', {returnObjects: true}),
                        null, 2
                    )
                }
            </pre>
        </div>
    );
};