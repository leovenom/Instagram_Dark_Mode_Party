describe("Not coverable zipcode quotation", () => {
  it("should make a quotation with a not coverable zipcode and send to waiting list", () => {
    cy.visitQuotation()
      .get("form")
      .findAllByText(/não sei a placa/i)
      .click()
      .wait(2000)
      .get("form")
      .addCarBrand("volks")
      .addCarYear("2012")
      .wait(3000)
      .addCarModel("gol 1.6")
      .clickSubmitButton()
      .wait(2000)
      .addCep("37800000")
      .wait(2000)
      .addCpf("10725089660")
      .wait(2000)
      .get("body");

    cy.verifyQuotation();

    cy.get("body")
      .findAllByText(/lista de espera/i)
      .eq(1)
      .click();

    cy.submitEmailToWaitingList("teste@cypress.com");
  });
});
