describe('Form app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('sanity test', () => {
    expect(1+2).to.equal(3)
  })
})