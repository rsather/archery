import './base.css';
import './variables.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import store from './store/configure';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';
import * as strings from './i18n/strings';

class MainApp {
    constructor(){
    }

    start() {

        // setup internationalization
        addLocaleData([...en, ...es]);
        const language = (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage;
        const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];
        const messages = strings[languageWithoutRegionCode] || strings[language] || strings.en;

        ReactDOM.render(
            <Provider store={store}>
                <IntlProvider locale={language} messages={messages}>
                    <Routes/>
                </IntlProvider>
            </Provider>,
            document.getElementById('app-container'));
    }
}

var app = new MainApp();
app.start();
