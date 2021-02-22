describe("Quotation with license plate info", () => {
  it("should make a quotation typing the license plate", () => {
    cy.visitQuotation()
      .get("form")
      .get("input")
      .type("gwz9846")
      .clickSubmitButton()
      .wait(3000)
      .get("#model")
      .click()
      .get("input")
      .type("gol 1.6")
      .get("ul > li:first-child")
      .click()
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
