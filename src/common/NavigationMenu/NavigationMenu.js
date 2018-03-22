import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavigationMenuRoot = styled.nav``;
const NavigationMenuLink = styled(NavLink)``;

const NavigationMenu = () => (
  <NavigationMenuRoot>
    <NavigationMenuLink to={"/search"}>Search</NavigationMenuLink>
    <NavigationMenuLink to={"/browse"}>Browse</NavigationMenuLink>
  </NavigationMenuRoot>
);

export default NavigationMenu;
