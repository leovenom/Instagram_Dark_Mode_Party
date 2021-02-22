describe("Quotation without the license plate info", () => {
  it("should make a quotation typing the car brand, year and model", () => {
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
      .addCep("30110001")
      .wait(2000)
      .addCpf("10725089660")
      .wait(2000)
      .get("body");

    cy.verifyQuotation();
  });
});
