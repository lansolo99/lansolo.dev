describe('/about', () => {
  beforeEach(() => {
    cy.visit('/about')
  })

  it('greets with avatar', () => {
    cy.get('#avatar')
  })

  it('renders social links', () => {
    cy.get('#socialLinks')
  })

  it('have a valid linkedin link', () => {
    cy.get('.linkedin').should(
      'have.attr',
      'href',
      'http://fr.linkedin.com/in/stephanechangarnier'
    )
  })
})
