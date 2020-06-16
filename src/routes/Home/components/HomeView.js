import React, { useState } from 'react'
import AuthView from "./AuthView"

import { IntlProvider, FormattedMessage } from 'react-intl';
import English from '../translations/en.json';
import Turkce from '../translations/tr.json';
import defaultMessage from '../components/AuthView/messages';

export default function HomeView(props) {
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
      <div className="home-container" >


        <div style={{marginTop:"50px",marginLeft:"1279px" , color:"#212529"}}>
        <button style={{}} onClick={() => changeLang('en')}>EN</button>
        <button style={{}} onClick={() => changeLang('tr')}>TR</button>
        
        </div>
        <AuthView />
      </div>



    </IntlProvider>
  );
}