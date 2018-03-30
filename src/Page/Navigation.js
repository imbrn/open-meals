import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Menu = styled.nav`
  display: flex;
`;

const MenuItem = styled(NavLink)`
  height: 64px;
  line-height: 64px;
  padding: 0 16px;
  font-family: var(--font-cursive);
  font-size: 2.5rem;
  border-radius: 32px;
  color: var(--color-white);
  text-decoration: none;
  &.active {
    background: var(--color-black-alpha-2);
  }
`;

const Navigation = ({ items }) => (
  <Menu>
    {items.map(item => (
      <MenuItem key={item.id} to={item.path}>
        {item.label}
      </MenuItem>
    ))}
  </Menu>
);

export default Navigation;
