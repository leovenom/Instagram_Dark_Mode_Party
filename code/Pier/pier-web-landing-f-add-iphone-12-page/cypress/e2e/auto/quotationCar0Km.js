describe("0km Car quotation", () => {
  it("should send to waiting list a 0km car quotation", () => {
    cy.visitQuotation()
      .get("form")
      .findAllByText(/não sei a placa/i)
      .click()
      .wait(2000)
      .get("form")
      .addCarBrand("volks")
      .addCarYear("2020")
      .wait(3000)
      .addCarModel("gol 1.6")
      .clickSubmitButton()
      .wait(2000)
      .get('[type="radio"]')
      .eq(0)
      .check()
      .clickSubmitButton();

    cy.submitEmailToWaitingList("demelo-10@hotmail.com");
  });
});
