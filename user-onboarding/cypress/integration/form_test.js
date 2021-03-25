describe('Form app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('sanity test', () => {
    expect(1+2).to.equal(3)
  })

  it('check if inputs are working', () => {
    cy.get('input[name="name"]')
      .should("have.value", "")
      .type("adam")
      .should("have.value", "adam")

    cy.get('input[name="email"]')
      .should("have.value", "")
      .type("adam@adam.com")
      .should("have.value", "adam@adam.com")

    cy.get('input[name="password"]')
      .should("have.value", "")
      .type("augs")
      .should("have.value", "augs")

    cy.get('input[name="tos"]')
      .should("not.be.checked")
      .click()
      .should("be.checked")
      .click()
      .should("not.be.checked")
  })

  it('can submit form data', () => {
    cy.get('input[name="name"]')
      .should("have.value", "")
      .type("adam")
      .should("have.value", "adam")

    cy.get('input[name="email"]')
      .should("have.value", "")
      .type("adam@adam.com")
      .should("have.value", "adam@adam.com")

    cy.get('input[name="password"]')
      .should("have.value", "")
      .type("augs")
      .should("have.value", "augs")

    cy.get('input[name="tos"]')
      .should("not.be.checked")
      .click()
      .should("be.checked")

    cy.get("#submitBtn")
      .click()
  })

  it('checks for form validation', () => {
    cy.get('input[name="name"]')
      .should("have.value", "")
      .type("a")
      .should("have.value", "a")

    cy.contains("name must be 3 characters long").should("exist")
  })
})