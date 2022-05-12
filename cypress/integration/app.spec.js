describe("Navigation", () => {
  it("shold loginPage to phoneVerificatoin", () => {
    cy.visit("http://localhost:3000/loginPage");

    cy.get("button").click();

    cy.url().should("include", "/phoneVerification");

    cy.get("button").contains("تایید");
  });
});
