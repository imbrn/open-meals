document.body.innerHTML = `
  <h1>Hello world!</h1>
`;

if (module.hot) {
  module.hot.accept();
}
