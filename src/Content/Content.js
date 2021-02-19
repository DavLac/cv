import React from "react";
import {useTranslation} from "react-i18next";
import ".././translations/i18n";

export const Content = () => {
    const {t} = useTranslation();

    return (
        <div>
            <h2>{t('common:welcome')} DavLac CV</h2>
            <h3>{t('common:rawProfileTitle')} : </h3>
            <pre>
                {JSON.stringify(t('profileData:profile', {returnObjects: true}), null, 2)}
            </pre>
        </div>
    );
};