import React from "react";
import styled from "styled-components";

const Footer = () => (
  <Root>
    <OpenMeals href={GITHUB_PROJECT_LINK}>OpenMeals</OpenMeals>
    <Made>
      Made with <a href="https://reactjs.org/">React</a> and <Red>❤️</Red> by{" "}
      <a href="https://github.com/bruno02221">Bruno C. Couto</a>
    </Made>
    <Thanks>
      Thanks to <a href="https://www.themealdb.com">themealdb</a>
    </Thanks>
  </Root>
);

const Root = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 64px;
  color: var(--color-white);
  font-size: 0.85rem;
  & > * {
    padding: 2px 12px;
  }
`;

const Red = styled.span`
  color: red;
`;

const OpenMeals = styled("a")`
  font-family: var(--font-cursive);
  font-weight: 400;
  text-decoration: none;
`;

const Made = styled.h1``;

const Thanks = styled.h1``;

export default Footer;
