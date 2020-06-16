import React, { useState } from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import English from '../../translations/en.json';
import Turkce from '../../translations/tr.json';
import defaultMessage from '../AuthView/messages';
export default function LanguageProvider(props) {
    const [locale, setLocale] = useState('tr');
    const [lang, setLang] = useState(Turkce);
    const changeLang = getLang => {
        setLocale(getLang);
        switch (getLang) {
            case 'tr':
                setLang(Turkce);
                break;
            case 'en':
                setLang(English);
                break;
            default:
                setLang(Turkce);


        }

    }

    return (
        <IntlProvider locale={locale} messages={lang}>

            <div className="text" style={{marginLeft:"1279px" ,marginTop:"0px"}}>
               
                
                <br />
                <br />
                <button onClick={() => changeLang('en')}>EN</button>
                <button onClick={() => changeLang('tr')}>TR</button>

            </div>
            {props.children}


        </IntlProvider>
    );
}