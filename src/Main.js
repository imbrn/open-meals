import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import routes from "./routes";
import { themeDeps, themeConfig, reset as cssReset } from "./style";
import { injectGlobal } from "styled-components";

injectGlobal`
  ${cssReset}
  ${themeDeps}
  :root {
    ${themeConfig}
  }
  html, body, #app { height: 100%; }
`;

const Main = () => (
  <BrowserRouter>
    <Switch>
      {routes.map(({ id, ...rest }) => {
        return <Route key={id} {...rest} />;
      })}
    </Switch>
  </BrowserRouter>
);

export default Main;
