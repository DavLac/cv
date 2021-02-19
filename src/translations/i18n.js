import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import {TRANSLATIONS_FR} from "./fr-FR/profileData.js";
import {TRANSLATIONS_EN} from "./en-EN/profileData.js";
import {COMMONS_EN} from "./en-EN/common.js";
import {COMMONS_FR} from "./fr-FR/common.js";

const resources = {
    en: {
        profileData: TRANSLATIONS_EN,
        common: COMMONS_EN
    },
    fr: {
        profileData: TRANSLATIONS_FR,
        common: COMMONS_FR
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        interpolation: {escapeValue: false},
        lng: 'en',
        ns: ['profileData', 'common'],
        defaultNS: 'common',
        resources: resources
    });

export const i18nFunction = (lang) => i18n.changeLanguage(lang);
