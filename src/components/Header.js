import React, { useState } from 'react';
import { Link } from 'react-router';
import { FormattedMessage, FormattedDate, FormattedNumber } from 'react-intl';
import defaultMessage from '../routes/Home/components/AuthView/messages';
import { IntlProvider } from 'react-intl';
import AuthView from "../routes/Home/components/AuthView"
import Turkce from '../routes/Home/translations/tr.json';
import English from '../routes/Home/translations/en.json';
export default function Header(props) {
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
            <div className="home-container" style={{ marginTop: "50px" }} >

                <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow" style={{ width: "100%", height: "50px" }}>
                    <a className="navbar-brand col-sm-1 col-md-1 mr-0" href="#">Cargom Express</a>

                    <div style={{ }}>
                        <button style={{}} onClick={() => changeLang('en')}>EN</button>
                        <button style={{}} onClick={() => changeLang('tr')}>TR</button>

                    </div>

                </nav>



                <AuthView />
            </div>





        </IntlProvider>




    )



};

