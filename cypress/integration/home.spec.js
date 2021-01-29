describe('The Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('post grid should be feeded with 16 articles', () => {
    cy.get('#grid article').should('have.length', 16)
  })

  it('first scroll to bottom should trigger infinite scroll and get 16 more posts', () => {
    cy.scrollTo('bottom')
    cy.get('#grid article').should('have.length', 32)
  })

  it.('clicked post link should have corresponding filter selected in its page', () => {
    cy.get('[data-cy=tags] div')
      .eq(2)
      .then((tag) => {
        const tagName = tag.text()

        cy.get(tag).click()

        cy.wait(100).get('[data-cy=gridPost--home] article').first().click()

        cy.get('[data-cy=postFilters]').find(`[data-cy="${tagName.trim()}"]`)
      })
  })
})
