describe('The Post Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('post page should have non empty related posts', () => {
    cy.get('[data-cy=gridPost--home] article').first().click()
    cy.get('[data-cy=postRelatedPosts] article').should('not.have.length', 0)
  })
})
