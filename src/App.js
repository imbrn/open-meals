import React from "react";
import { BrowserRouter } from "react-router-dom";
import Main from "./pages/Main";
import { injectGlobal } from "styled-components";

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
    --color-background: #82526e;
    --color-black: rgb(30, 18, 18);
    --color-black-alpha-1: rgba(30, 18, 18, 0.75);
    --color-black-alpha-2: rgba(30, 18, 18, 0.25);
    --color-black-alpha-3: rgba(30, 18, 18, 0.10);
    --color-white: #ffffff;
    --font-cursive: 'Lobster', cursive;
    --font-serif: 'Roboto Slab', serif;
  }
`;

const App = () => (
  <BrowserRouter>
    <Main />
  </BrowserRouter>
);

export default App;
