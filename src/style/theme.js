import reset from "./reset";

export const themeDeps = `
  @import url('https://fonts.googleapis.com/css?family=Lobster|Roboto+Condensed:400,700');
`;

export const themeConfig = `
  :root {
    --color-background: #7f3e7cff;
    --color-black: #1e1212ff;
    --color-black-alpha-1: rgba(30, 18, 18, 0.75);
    --color-black-alpha-2: rgba(30, 18, 18, 0.25);
    --color-white: #ffffffff;
    --font-sans-serif: 'Roboto Condensed', sans-serif;
    --font-cursive: 'Lobster', cursive;
  }
`;

export const themeDefaults = `
  html, body {
    font-family: var(--font-sans-serif);
    font-size: 16px;
    height: 100%;
  }
  #app {
    height: 100%;
  }
  *, *::before, *::after {
    box-sizing: border-box;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
  }
`;

const theme = `
  ${reset}
  ${themeDeps}
  ${themeConfig}
  ${themeDefaults}
`;

export default theme;
