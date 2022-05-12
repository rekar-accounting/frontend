describe("Navigation", () => {
  it("shold loginPage to phoneVerificatoin", () => {
    cy.visit("http://localhost:3000/loginPage");

    cy.get("").click();

    cy.url().should("include", "/phoneVerification");

    cy.get("button").contains("ورود به");
  });
});
