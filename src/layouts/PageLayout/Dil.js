import React, { PureComponent } from "react";
import { IntlProvider, addLocaleData } from "react-intl";

import trLocaleData from "react-intl/locale-data/tr";
const trTranslationMessages = require("../translations/tr.json");
const enTranslationMessages = require("../translations/en.json");

addLocaleData(trLocaleData);

const messages = {
  tr: trTranslationMessages,
  en: enTranslationMessages
};

export default class IntlProviderComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      locale: "tr"
    };
  }

  setLocale(locale) {
    this.setState(() => ({ locale }));
  }

  render() {
    return (
      <IntlProvider locale={this.state.locale} messages={messages[this.state.locale]}>
        <>
          <button onClick={() => this.setLocale("tr")}>TR</button>
          <button onClick={() => this.setLocale("en")}>EN</button>
          {this.props.children}
        </>
      </IntlProvider>
    );
  }
}
