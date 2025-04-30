describe('Landing Page', () => {
  beforeEach(() => {
    cy.visit('/') 
  })

  it('displays the title', () => {
    cy.contains('h1', 'Success Cafe').should('be.visible')
  })

  it('shows the current date and time', () => {
    cy.get('.datetime')
      .should('exist')
      .and(($el) => {
        const text = $el.text()
        expect(text).to.not.be.empty
      })
  })

  it('has a visible "New Sale" button in the center', () => {
    cy.contains('button', 'New Sale')
      .should('be.visible')
  })

  it('has a visible "Staff/Manager Access" button', () => {
    cy.contains('button', 'Staff/Manager Access')
      .should('be.visible')
  })
})
