describe("My firs test", () => {
  it("clicking 'type' navigates to a new url", () => {
    cy.visit("https://example.cypress.io");
    cy.contains("type").click();
  });
});
