import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Links = styled.nav`
  font-family: var(--font-cursive);
`;

const Link = styled(NavLink)`
  display: inline-block;
  color: var(--color-white);
  text-decoration: none;
  font-size: 2.5rem;
  height: 64px;
  line-height: 64px;
  border-radius: 32px;
  padding: 0 24px;
  &.active {
    background: var(--color-black-alpha-2);
  }
`;

class NavigationMenu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Links>
        <Link to="/search">Search</Link>
        <Link to="/browse">Browse</Link>
      </Links>
    );
  }
}

export default NavigationMenu;
