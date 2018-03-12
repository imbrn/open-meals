import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Navigation, { NavigationLink } from "../components/Navigation";
import styled from "styled-components";

import Search from "./Search";
import Browse from "./Browse";
import NotFound from "./NotFound";

const routes = [
  {
    id: "search",
    title: "Search",
    component: Search,
    path: "/search",
    exact: true
  },
  {
    id: "browse",
    title: "Browse",
    component: Browse,
    path: "/browse",
    exact: true
  },
  { id: "notfound", component: NotFound }
];

const Root = styled.div`
  background: var(--color-background);
  color: var(--color-black);
  min-height: 100%;
`;

const AppNavigation = () => <Navigation>{mapRoutesToLinks(routes)}</Navigation>;

const mapRoutesToLinks = routes =>
  routes.filter(it => it.hasOwnProperty("path")).map(route => (
    <NavigationLink key={route.path} tag={NavLink} to={route.path}>
      {route.title}
    </NavigationLink>
  ));

const AppContentWrapper = styled.main`
  padding: 80px 190px;
`;

const AppContent = () => (
  <AppContentWrapper>
    <Switch>{mapRoutesToRouterRoutes(routes)}</Switch>
  </AppContentWrapper>
);

const mapRoutesToRouterRoutes = routes => {
  return routes.map(({ id, ...rest }) => <Route key={id} {...rest} />);
};

const Main = () => (
  <Root>
    <AppNavigation />
    <AppContent />
  </Root>
);

export default Main;
