describe("Not coverable car quotation", () => {
  it("should send to waiting list a not coverable car", () => {
    cy.visitQuotation()
      .get("form")
      .findAllByText(/não sei a placa/i)
      .click()
      .wait(2000)
      .get("form")
      .addCarBrand("fiat")
      .addCarYear("2018")
      .wait(3000)
      .addCarModel("strada")
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
