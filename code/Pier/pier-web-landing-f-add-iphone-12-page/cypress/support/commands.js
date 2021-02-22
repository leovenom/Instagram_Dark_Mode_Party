// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add("visitQuotation", () => {
  cy.visit("/seguro-auto")
    .wait(2000)
    .get("body")
    .findAllByText(/ver preços/i)
    .eq(0)
    .click();
});

Cypress.Commands.add("clickSubmitButton", () => {
  cy.get('button[type="submit"]').click();
});

Cypress.Commands.add("addCarBrand", (typedBrand) => {
  cy.get("#brand")
    .click()
    .get("input")
    .type(typedBrand)
    .get("ul > li:first-child")
    .click();
});

Cypress.Commands.add("addCarYear", (typedYear) => {
  cy.get("#year")
    .click()
    .get("input")
    .type(typedYear)
    .get("ul > li:first-child")
    .click();
});

Cypress.Commands.add("addCarModel", (typedModel) => {
  cy.get("#model")
    .click()
    .get("input")
    .type(typedModel)
    .get("ul > li:first-child")
    .click();
});

Cypress.Commands.add("addCep", (cep) => {
  cy.get("form").get("input").type(cep).get('button[type="submit"]').click();
});

Cypress.Commands.add("addCpf", (cpf) => {
  cy.get("form")
    .get("input")
    .wait(500)
    .type(cpf)
    .get('button[type="submit"]', { timeout: 5000 })
    .click();
});

Cypress.Commands.add("verifyQuotation", () => {
  cy.findAllByText("VW - VolksWagen Gol 2012").should("exist");
  cy.url().should("include", "/cotacao/valores");
});

Cypress.Commands.add("submitEmailToWaitingList", (email) => {
  cy.get('[role="dialog"] input')
    .type(email)
    .get('[role="dialog"] button[type="submit"]')
    .click()
    .wait(2000)
    .get('[role="dialog"] button')
    .click();

  cy.url().should("eq", "http://localhost:3000/seguro-auto");
});
