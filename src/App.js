import React from "react";
import './App.css';
import {i18nFunction} from './translations/i18n';
import {Content} from "./Content/Content";
import "./translations/i18n";
import {useTranslation} from "react-i18next";
import i18n from "i18next";
import enFlag from './translations/en-EN/en-flag.png';
import frFlag from './translations/fr-FR/fr-flag.png';

let renderLangFlag = () => {
    switch (i18n.language) {
        case 'en':
            return (<img src={enFlag} alt="en flag" width='50' height='25'/>);
        case 'fr':
            return (<img src={frFlag} alt="fr flag" width='50' height='25'/>);
        default:
            return (<img src={enFlag} alt="en flag" width='50' height='25'/>);
    }
}

function App() {

    const {t} = useTranslation();

    const handleOnclick = (e) => {
        e.preventDefault();
        i18nFunction(e.target.value);
    }

    return (
        <div className="App">
            <header className="App-header">
                <nav>
                    {renderLangFlag()}

                    <div>{t('common:currentLanguage')} :</div>

                    <select name="language" id="en" onChange={handleOnclick}>
                        <option value="en">English</option>
                        <option value="fr">Francais</option>
                    </select>

                    <div>{t('common:chooseYourLanguage')} :</div>
                </nav>
                <Content/>
            </header>
        </div>
    );
}

export default App;
