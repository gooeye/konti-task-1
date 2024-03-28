describe('Stories List', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should initially display a loading message', () => {
    cy.contains('Loading').should('be.visible'); 
  });

  it('should fetch and display a list of stories', () => {
    cy.get('[data-testid="story-item"]')
      .should('have.length.greaterThan', 2);
  });
});
