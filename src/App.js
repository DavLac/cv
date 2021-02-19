import React from "react";
import './App.css';
import {i18nFunction} from './translations/i18n';
import {Content} from "./Content/Content";

function App() {

    const handleOnclick = (e) => {
        e.preventDefault();
        i18nFunction(e.target.value);
    }

    return (
        <div className="App">
            <header className="App-header">
                <div style={{
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <button value='fr' onClick={handleOnclick}>
                        Francais
                    </button>
                    <button value='en' onClick={handleOnclick}>
                        English
                    </button>
                </div>

                <Content/>
            </header>
        </div>
    );
}

export default App;
