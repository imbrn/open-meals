import React from "react";
import styled from "styled-components";

const Navigation = styled.nav`
  padding: 32px 64px;
  display: flex;
`;

export const NavigationLink = styled(({ tag, children, ...rest }) =>
  React.createElement(tag, rest, children)
)`
  display: block;
  color: var(--color-white);
  font-family: var(--font-cursive);
  font-size: 2.5rem;
  text-decoration: none;
  height: 64px;
  line-height: 64px;
  border-radius: 32px;
  padding: 0 16px;
  margin-left: 16px;

  &.active {
    background: var(--color-black-alpha-2);
  }

  &:active {
    background: var(--color-black-alpha-3);
  }

  &:first-child {
    margin-left: 0;
  }
`;

export default Navigation;
