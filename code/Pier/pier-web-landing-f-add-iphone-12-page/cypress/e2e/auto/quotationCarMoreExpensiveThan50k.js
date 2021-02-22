describe("Expensive car quotation", () => {
  it("should send to waiting list a car more expensive than 50k", () => {
    cy.visitQuotation()
      .get("form")
      .findAllByText(/não sei a placa/i)
      .click()
      .wait(2000)
      .get("form")
      .addCarBrand("ford")
      .addCarYear("2018")
      .wait(3000)
      .addCarModel("fusion")
      .clickSubmitButton()
      .wait(2000)
      .addCep("30110001")
      .wait(2000)
      .addCpf("10725089660")
      .wait(2000)
      .get("body");

    cy.submitEmailToWaitingList("teste@cypress.com");
  });
});
