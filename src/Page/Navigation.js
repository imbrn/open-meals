import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import GithubIcon from "./github.svg";

const Navigation = ({ items }) => (
  <Root>
    <Menu>
      {items.map(item => (
        <MenuItem key={item.id} to={item.path}>
          {item.label}
        </MenuItem>
      ))}
    </Menu>
    <GithubLink href={GITHUB_PROJECT_LINK}>
      <GithubIcon />
    </GithubLink>
  </Root>
);

const Root = styled.nav`
  display: flex;
  align-items: center;
  @media (min-width: 420px) {
    & > ${GithubLink} {
      display: none;
    }
  }
`;

const Menu = styled.nav`
  display: flex;
  flex-grow: 1;
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

const GithubLink = styled.a`
  display: none;
  width: 32px;
  height: 32px;
  & > svg {
    fill: var(--color-white);
  }
  @media (min-width: 400px) {
    display: block;
  }
`;

export default Navigation;
