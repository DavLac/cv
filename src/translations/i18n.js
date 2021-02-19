import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import {TRANSLATIONS_FR} from "./fr-FR/translation.js";
import {TRANSLATIONS_EN} from "./en-EN/translation.js";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        interpolation: {escapeValue: false},
        lng: 'en',
        resources: {
            en: {
                translation: TRANSLATIONS_EN
            },
            fr: {
                translation: TRANSLATIONS_FR
            }
        }
    });

export const i18nFunction = (lang) => i18n.changeLanguage(lang);
