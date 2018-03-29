import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import routes from "./routes";
import { theme } from "./style";
import { injectGlobal } from "styled-components";

injectGlobal`
  ${theme}
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
