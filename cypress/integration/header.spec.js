describe('The header', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Nav menu should have 3 links labeled: blog / projects / about', () => {
    cy.get('nav a').eq(0).contains('Blog')
    cy.get('nav a').eq(1).contains('Projects')
    cy.get('nav a').eq(2).contains('About')
  })

  it('About link should navigate /about page ', () => {
    cy.get('nav a').eq(2).click()
    cy.url().should('include', '/about')
  })
})
