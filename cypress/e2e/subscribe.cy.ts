describe("Newsletter Subscribe Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it("allow users to subscribe to the email list", () => {
    cy.getByData("email-input").type("naoya@naoya0117.com")
    cy.getByData("submit-button").click()
    cy.getByData("success-message").should("exist").contains("naoya@naoya0117.com")
  })

  it("does NOT allow an invalid email address", () => {
    cy.getByData("email-input").type("naoya")
    cy.getByData("submit-button").click()
    cy.getByData("success-message").should("not.exist")
  })

  it("does NOT allow already subscribed email address", () => {
    cy.getByData("email-input").type("john@example.com")
    cy.getByData("submit-button").click()
    cy.getByData("server-error-message")
      .should("exist")
      .contains("already exists. Please use a different email address.")
  })
})
