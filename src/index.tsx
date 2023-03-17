import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { IntlProvider } from "react-intl";
import { Provider } from "react-redux";
import store from "./store";
import messages from "./locales/data.json";
import { Auth0Provider } from "@auth0/auth0-react";

export const locale = "en";

ReactDOM.render(
  <Auth0Provider
    domain="dev-03qlmfn2jnvrnr2e.eu.auth0.com"
    clientId="fbkjQtHzYtjd62nVsHDGRbLn3o7eADQi"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <Provider store={store}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        <App />
      </IntlProvider>
    </Provider>
  </Auth0Provider>,
  document.getElementById("root")
);

reportWebVitals();
