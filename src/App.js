import React from "react";
import { BrowserRouter } from "react-router-dom";
import styled, { injectGlobal } from "styled-components";
import SearchPage from "./search/SearchPage";

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Lobster|Roboto+Slab');

  html,body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: "Roboto Slab", serif;
  }

  #app {
    height: 100%;
  }

  *, *::before, *::after {
    box-sizing: border-box;
    font-family: inherit;
  }

  :root {
    --color-background: #7f3e7cff;
    --color-black: rgb(30, 18, 18);
    --color-black-alpha-1: rgba(30, 18, 18, 0.75);
    --color-black-alpha-2: rgba(30, 18, 18, 0.25);
    --color-black-alpha-3: rgba(30, 18, 18, 0.10);
    --color-white: #ffffff;
    --font-cursive: 'Lobster', cursive;
    --font-serif: 'Roboto Slab', serif;
    --box-shadow-1: 2px 2px 8px rgba(0, 0, 0, 0.1);
  }
`;

const Root = styled.div`
  background: var(--color-background);
  min-height: 100%;
`;

const ActiveContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const App = () => (
  <BrowserRouter>
    <Root>
      <ActiveContent>
        <SearchPage />
      </ActiveContent>
    </Root>
  </BrowserRouter>
);

export default App;
